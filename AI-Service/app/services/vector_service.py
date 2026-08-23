import faiss
import numpy as np
import json
import os


INDEX_PATH = "artwork.index"
MAPPING_PATH = "artwork_mapping.json"


# Will be initialized when the first vector is added
index = None

# FAISS position -> MongoDB artwork ID
artwork_mapping = {}


def load_index():

    global index
    global artwork_mapping

    if os.path.exists(INDEX_PATH):

        index = faiss.read_index(INDEX_PATH)

        with open(MAPPING_PATH, "r") as f:
            artwork_mapping = json.load(f)

        print("FAISS index loaded.")

    else:

        index = None
        artwork_mapping = {}

        print("No existing FAISS index found.")


def save_index():

    faiss.write_index(index, INDEX_PATH)

    with open(MAPPING_PATH, "w") as f:
        json.dump(artwork_mapping, f)


def add_artwork_embedding(artwork_id, vector):

    global index

    vector = np.array(
        [vector],
        dtype="float32"
    )

    # Create FAISS index using vector dimension
    if index is None:

        dimension = vector.shape[1]

        index = faiss.IndexFlatL2(dimension)

    # Position before adding
    position = index.ntotal

    index.add(vector)

    artwork_mapping[str(position)] = artwork_id

    save_index()

    return position

def search_artworks(vector, top_k=10):

    if index is None or index.ntotal == 0:
        return []

    vector = np.array(
        [vector],
        dtype="float32"
    )

    distances, positions = index.search(
        vector,
        top_k
    )

    results = []

    for distance, position in zip(
        distances[0],
        positions[0]
    ):

        if position == -1:
            continue

        artwork_id = artwork_mapping.get(
            str(position)
        )

        if artwork_id:

            results.append({
                "artworkId": artwork_id,
                "distance": float(distance),
                "position": int(position)
            })

    return results
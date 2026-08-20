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
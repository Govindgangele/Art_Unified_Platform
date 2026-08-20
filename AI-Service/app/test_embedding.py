from app.services.embedding_service import create_embedding

text = """
A peaceful landscape painting showing a calm lake surrounded
by mountains during sunset, with warm orange and golden colors.
"""

vector = create_embedding(text)

print("Embedding created successfully")
print("Vector length:", len(vector))
print("First 10 values:", vector[:10])
from fastapi import APIRouter
from pydantic import BaseModel

from app.services.embedding_service import create_embedding
from app.services.vector_service import add_artwork_embedding


router = APIRouter()


class ArtworkEmbeddingRequest(BaseModel):

    artworkId: str

    text: str


@router.post("/embed")
def embed_artwork(data: ArtworkEmbeddingRequest):

    vector = create_embedding(data.text)

    position = add_artwork_embedding(
        data.artworkId,
        vector
    )

    return {

        "success": True,

        "artworkId": data.artworkId,

        "vectorPosition": position,

        "embeddingDimension": len(vector),

    }
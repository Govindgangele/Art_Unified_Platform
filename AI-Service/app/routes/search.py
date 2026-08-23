from fastapi import APIRouter
from pydantic import BaseModel

from app.services.embedding_service import create_embedding
from app.services.vector_service import search_artworks


router = APIRouter()


class ArtworkSearchRequest(BaseModel):

    query: str
    top_k: int = 10


@router.post("/search")
def search_artworks_route(data: ArtworkSearchRequest):

    vector = create_embedding(data.query)

    results = search_artworks(
        vector,
        data.top_k
    )

    return {
        "success": True,
        "query": data.query,
        "results": results
    }
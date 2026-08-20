from fastapi import FastAPI
from app.routes.embed import router as embed_router
from app.services.vector_service import load_index
app = FastAPI(
    title="Kala AI Service",
    description="AI service for artwork semantic search",
    version="1.0.0"
)
load_index()
app.include_router(
    embed_router,
    prefix="/ai"
)

@app.get("/")
def root():
    return {
        "success": True,
        "message": "Kala AI Service is running"
    }


@app.get("/health")
def health():
    return {
        "success": True,
        "service": "AI-Service",
        "status": "healthy"
    }
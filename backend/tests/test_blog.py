from fastapi.testclient import TestClient

from backend.main import app

client = TestClient(app)

def test_read_blogs():
    response = client.get('/api/blogs')
    assert response.status_code == 200
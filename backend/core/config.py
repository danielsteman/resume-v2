from pydantic import (
    BaseSettings,
    PostgresDsn,
)

class Settings(BaseSettings):
    pg_dsn: PostgresDsn = 'postgresql://postgres:test@localhost:5432/postgres'
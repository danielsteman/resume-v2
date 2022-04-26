from pydantic import (
    BaseSettings,
    PostgresDsn,
)


class Settings(BaseSettings):
    PG_DSN: PostgresDsn = 'postgresql://postgres:test@localhost:5432/postgres'

settings = Settings()
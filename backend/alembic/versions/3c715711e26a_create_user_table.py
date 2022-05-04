"""create user table

Revision ID: 3c715711e26a
Revises: 654f19183490
Create Date: 2022-05-03 22:35:40.266541

"""
from email.policy import default
from pandera import Bool
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3c715711e26a'
down_revision = '654f19183490'
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        'user',
        sa.Column('id', sa.Integer, primary_key=True, index=True),
        sa.Column('email', sa.String(250), nullable=False),
        sa.Column('password', sa.String(250), nullable=False),
        sa.Column('is_active', sa.Boolean, default=False)
    )


def downgrade():
    op.drop_table('user')

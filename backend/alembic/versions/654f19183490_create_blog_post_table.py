"""create blog_post table

Revision ID: 654f19183490
Revises: 
Create Date: 2022-04-19 18:29:11.642523

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '654f19183490'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        'blog_post',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('title', sa.String(250), nullable=False),
        sa.Column('body', sa.Text, nullable=False),
        sa.Column('tags', sa.ARRAY(sa.String(40))),
    )


def downgrade():
    op.drop_table('blog_post')
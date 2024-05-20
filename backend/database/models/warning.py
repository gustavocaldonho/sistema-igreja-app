from db import Base
from sqlalchemy import Integer, Boolean, String, Text, ForeignKey, Column

class Warning(Base):
    __tablename__ = 'warnings'

    id: str = Column(Integer, primary_key=True)
    active: bool = Column(Boolean, nullable=False)
    coverange: bool = Column(Boolean, nullable=False)
    title: str = Column(String(100), nullable=False)
    description: str = Column(Text, nullable=True)
    community_id: str = Column(String, ForeignKey('communities.id'), nullable=False)
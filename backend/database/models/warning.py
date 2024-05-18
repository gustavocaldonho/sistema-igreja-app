from db import Base
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import Integer, Boolean, String, Text, ForeignKey

class Warning(Base):
    __tablename__ = "warnings"

    id: Mapped[str] = mapped_column(Integer, primary_key=True)
    active: Mapped[bool] = mapped_column(Boolean, nullable=False)
    coverange: Mapped[bool] = mapped_column(Boolean, nullable=False)
    title: Mapped[str] = mapped_column(String(100), nullable=False)
    description: Mapped[str] = mapped_column(Text, nullable=True)
    community_id: Mapped[str] = mapped_column(String, ForeignKey('communities.id'), nullable=False)

    community = relationship("Community", back_populates="warnings")
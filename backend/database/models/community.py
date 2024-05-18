from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import String, Boolean, LargeBinary
from db import Base

class Community(Base):
    __tablename__ = "communities"

    id: Mapped[str] = mapped_column(String, primary_key=True)
    active: Mapped[bool] = mapped_column(Boolean, nullable=False)
    patron: Mapped[str] = mapped_column(String(45), nullable=False)
    location: Mapped[str] = mapped_column(String(45), nullable=False)
    community_image: Mapped[str] = mapped_column(LargeBinary, nullable=True)

    warnings = relationship("Warning", back_populates="community")
    users = relationship("User", back_populates="community")
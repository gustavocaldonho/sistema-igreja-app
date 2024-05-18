from db import Base
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import String, Date, LargeBinary, ForeignKey

class User(Base):
    __tablename__ = "users"

    id: Mapped[str] = mapped_column(String, primary_key=True)
    name: Mapped[str] = mapped_column(String(45), nullable=False)
    email: Mapped[str] = mapped_column(String, nullable=False, unique=True)
    birthday: Mapped[str] = mapped_column(Date, nullable=False)
    cpf: Mapped[str] = mapped_column(String, nullable=False, unique=True)
    community_id: Mapped[str] = mapped_column(String, ForeignKey('communities.id'), nullable=False)
    profile_image: Mapped[str] = mapped_column(LargeBinary, nullable=True)
    password: Mapped[str] = mapped_column(String, nullable=False)

    community = relationship("Community", back_populates="users")
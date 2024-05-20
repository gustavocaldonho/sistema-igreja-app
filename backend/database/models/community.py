from sqlalchemy.orm import relationship
from sqlalchemy import String, Boolean, LargeBinary, Column
from db import Base

class Community(Base):
    __tablename__ = 'communities'

    id: str = Column(String, primary_key=True)
    active: bool = Column(Boolean, nullable=False)
    patron: str = Column(String(45), nullable=False)
    location: str = Column(String(45), nullable=False)
    community_image: str = Column(LargeBinary, nullable=True)

    warnings = relationship("Warning", backref='warnings', cascade="all, delete")
    users = relationship("User", backref='users', cascade="all, delete")
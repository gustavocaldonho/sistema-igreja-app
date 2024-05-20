from db import Base
from sqlalchemy import String, Date, LargeBinary, ForeignKey, Column

class User(Base):
    __tablename__ = 'users'

    id: str = Column(String, primary_key=True)
    name: str = Column(String, nullable=False)
    email: str = Column(String, nullable=False, unique=True)
    birthday: str = Column(Date, nullable=False)
    cpf: str = Column(String, nullable=False, unique=True)
    community_id: str = Column(String, ForeignKey('communities.id'), nullable=False)
    profile_image: str = Column(LargeBinary, nullable=True)
    password: str = Column(String, nullable=False)
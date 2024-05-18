from db import Base, engine
import asyncio

async def create_db():
    async with engine.begin() as conn:
        from models.user import User
        from models.community import Community
        from models.warning import Warning

        await conn.run_sync(Base.metadata.drop_all)
        await conn.run_sync(Base.metadata.create_all)

    await engine.dispose()

asyncio.run(create_db())
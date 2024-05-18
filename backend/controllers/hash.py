from passlib.hash import bcrypt

def hash_value(value):
    return bcrypt.hash(value)

def verify_hash(value, hash_value):
    return bcrypt.verify(value, hash_value)
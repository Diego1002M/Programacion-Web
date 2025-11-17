"""Database connection helper for the backend.

This file resolves a previous merge conflict and exposes `get_connection()`.
The function prefers environment variables but accepts optional parameters for
programmatic use. Defaults aim to be sensible for local development.
"""

import os
import mysql.connector
from mysql.connector import Error


def get_connection(host: str | None = None,
                   user: str | None = None,
                   password: str | None = None,
                   database: str | None = None,
                   port: int | None = None):
    """Create and return a MySQL connection.

    Priority for values: explicit argument -> corresponding environment variable -> default.

    Environment variables used:
      - DB_HOST (default: localhost)
      - DB_USER (default: root)
      - DB_PASSWORD (default: empty string)
      - DB_NAME (default: proyecto_web)
      - DB_PORT (default: 3306)

    Returns a mysql.connector connection object on success, or None on failure.
    """

    host = host or os.getenv("DB_HOST", "localhost")
    user = user or os.getenv("DB_USER", "root")
    password = password or os.getenv("DB_PASSWORD", "palomino")
    database = database or os.getenv("DB_NAME", "proyecto_web")
    port = port or int(os.getenv("DB_PORT", "3306"))

    try:
        connection = mysql.connector.connect(
            host=host,
            user=user,
            password=password,
            database=database,
            port=port,
        )
        # connection.is_connected() exists for mysql-connector; be defensive:
        if hasattr(connection, "is_connected") and connection.is_connected():
            print(f"✅ Conectado correctamente a MySQL ({database}@{host}:{port}).")
            return connection
        # If the connector used doesn't provide is_connected, return the connection
        # object when no exception was raised.
        return connection
    except Error as e:
        print(f"❌ Error al conectar a MySQL: {e}")
        return None


const mapAlbumToDBModel = ({
    name, year, created_at: createdAt, updated_at: updatedAt,
  }) => ({
    name, year, createdAt, updatedAt,
  });
  
  const mapSongToDBModel = ({
    title, year, genre, performer, duration, albumId, created_at: createdAt,
    updated_at: updatedAt,
  }) => ({
    title, year, genre, performer, duration, albumId, createdAt, updatedAt,
  });
  
  module.exports = { mapAlbumToDBModel, mapSongToDBModel };

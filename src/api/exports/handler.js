const ClientError = require('../../exceptions/ClientError');
 
class ExportsHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;
 
    this.postExportPlaylistsHandler = this.postExportPlaylistsHandler.bind(this);
  }
 
  async postExportPlaylistsHandler(request, h) { 
    this._validator.validateExportPlaylistsPayload(request.payload);
 
    const message = {
      userId: request.auth.credentials.id,
      targetEmail: request.payload.targetEmail,
      playlistId,
  };
 
    await this._service.sendMessage('export:playlists', JSON.stringify(message));
 
    const response = h.response({
      status: 'success',
      message: 'Permintaan Anda sedang kami proses',
    });
    response.code(201);
    return response;
  }
}
 
module.exports = ExportsHandler;

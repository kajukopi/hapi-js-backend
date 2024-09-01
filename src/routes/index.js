export const homepage = {
  method: 'GET', path: '/', handler: async (request, h) => {
    return h.view('index', {
      title: 'Homepage | hapi ' + request.server.version,
      message: 'Request session '
    });
  }
}

export const staticfile = {
  method: 'GET',
  path: '/assets/{param*}', // Match the /assets/ path
  handler: {
    directory: {
      path: '.', // Serve from the 'assets' directory
      index: false, // Don't serve index.html automatically
      redirectToSlash: true,
    }
  }
}

// ======================================CRUD=============================================

export const CREATE = {
  method: 'POST', path: '/api/{collection}', handler: async (request, h) => {
    console.log(request.params.id);
    return h.json({ status: true })
  }
}

export const READ = {
  method: 'GET', path: '/api/{collection}/{id}', handler: async (request, h) => {
    console.log(request.params.id);
    return h.json({ status: true })
  }
}

export const UPDATE = {
  method: 'PUT', path: '/api/{collection}/{id}', handler: async (request, h) => {
    console.log(request.params.id);
    return h.json({ status: true })
  }
}

export const DELETE = {
  method: 'DELETE', path: '/api/{collection}/{id}', handler: async (request, h) => {
    console.log(request.params.id);
    return h.json({ status: true })
  }
}

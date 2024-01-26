var videos = [
    {titulo: 'Video 1', descripcion: 'Descripción Video 1', url: '../videos/MyLiveWallpapers-com-Conch-Street.mp4'},
    {titulo: 'Video 2', descripcion: 'Descripción Video 2', url: '../videos/MyLiveWallpapers-com-Conch-Street.mp4'},
    {titulo: 'Video 3', descripcion: 'Descripción Video 3', url: '../videos/MyLiveWallpapers-com-Conch-Street.mp4'},
    {titulo: 'Video 4', descripcion: 'Descripción Video 4', url: '../videos/MyLiveWallpapers-com-Conch-Street.mp4'},
    {titulo: 'Video 5', descripcion: 'Descripción Video 5', url: '../videos/MyLiveWallpapers-com-Conch-Street.mp4'},
    {titulo: 'Video 6', descripcion: 'Descripción Video 6', url: '../videos/MyLiveWallpapers-com-Conch-Street.mp4'},
    {titulo: 'Video 7', descripcion: 'Descripción Video 7', url: '../videos/MyLiveWallpapers-com-Conch-Street.mp4'}
];

var listaVideos = document.getElementById('idListaVideosArreglos');

mostrarListaVideos(videos);

function mostrarListaVideos(videosBuscados) {
    listaVideos.innerHTML = '';
    videosBuscados.forEach(indiceVideo =>{
        var fila = document.createElement('div');
        var col1UrlVideo = document.createElement('div');
        var iframeVideo = document.createElement('iframe');

        fila.setAttribute('class', 'row');
        col1UrlVideo.setAttribute('class', 'col-sm-12 col-md-6 col-gd-6');
        iframeVideo.setAttribute('src', indiceVideo.url);
        iframeVideo.setAttribute('width', '100%');
        iframeVideo.setAttribute('height', 'auto');
        iframeVideo.setAttribute('frameborder', '0');

        col1UrlVideo.appendChild(iframeVideo);
        fila.appendChild(col1UrlVideo);

        var colTitulo = document.createElement('div');
        var tituloV = document.createElement('h4');
        var desV = document.createElement('h6');

        colTitulo.setAttribute('class','col-sm-9 col-md-5 col-gd-5');
        tituloV.textContent = indiceVideo.titulo;
        desV.textContent = indiceVideo.descripcion;

        colTitulo.appendChild(tituloV);
        colTitulo.appendChild(desV);
        fila.appendChild(colTitulo);

        var colIcono = document.createElement('div');
        var iconoV = document.createElement('i');

        colIcono.setAttribute('class','col-sm-3 col-md-1 col-gd-1');
        iconoV.setAttribute('class', 'bi bi-heart');

        colIcono.appendChild(iconoV);
        fila.appendChild(colIcono);

        listaVideos.appendChild(fila);
    });
}
// function mostrarDescirpcion() {
//     descripcionVideo.innerHTML = '';
//     videos.forEach(indiceVideo =>{
        
//         var colDes = document.createElement('div');
//         var tituloV = document.createElement('h4');
//         var desV = document.createElement('p');

//         fila.setAttribute('class', 'row');
//         colDes.setAttribute('class', 'col');
//         tituloV.textContent(indiceVideo.titulo);
//         desV.textContent(indiceVideo.descripcion);

//         colDes.appendChild(tituloV);
//         colDes.appendChild(desV);
//         fila.appendChild(colDes);
//         descripcionVideo.appendChild(fila);
//     });
// }
// function mostrarIcono() {
//     iconoVideo.innerHTML = '';
//     videos.forEach(indiceVideo =>{
//         var fila = document.createElement('div');
//         var col1UrlVideo = document.createElement('div');
//         var iframeVideo = document.createElement('iframe');
//         var iframeVideo = document.createElement('iframe');

//         fila.setAttribute('class', 'row');
//         col1UrlVideo.setAttribute('class', 'col');
//         iframeVideo.setAttribute('src', indiceVideo.url);
//         iframeVideo.setAttribute('width', '400px');
//         iframeVideo.setAttribute('height', '400px');
//         iframeVideo.setAttribute('frameborder', '0');

//         col1UrlVideo.appendChild(iframeVideo);
//         fila.appendChild(col1UrlVideo);

//         iconoVideo.appendChild(fila);
//     });
// }
function buscarVideos() {
    var textoVideo = document.getElementById('txtBuscar').value;
    //alert('Texto Buscado: '+textoVideo);
    var videosBuscados = videos.filter(
        indiceVideo =>{
            return indiceVideo.titulo.includes(textoVideo);
        }
    );
    mostrarListaVideos(videosBuscados);
}
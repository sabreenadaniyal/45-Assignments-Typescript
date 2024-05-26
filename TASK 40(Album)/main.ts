function make_album(artist_name:string, title_name:string, tracks?:number) {
   let album:{artist:string,title:string,tracks?:number}={
       artist:artist_name,
       title:title_name,
  }
  if(tracks !== undefined)
    album.tracks = tracks
  return album
}
let album1=make_album('artist_name1','title_name1')
console.log(album1);
let album2=make_album('artist_name2','title_name2')
console.log(album2);
let album3=make_album('artist_name3','title_name3',12)
console.log(album3);

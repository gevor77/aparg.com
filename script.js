//  const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=9b75fe07e26e9705743e37f526b74aff&tags=cat&text=cat&per_page=5&format=json&nojsoncallback=1&auth_token=72157720844283712-85637360df53dab0&api_sig=c2f11e82c29072ccc449513685b04c25'
//  console.log(url);

//  async function funcName(url){
//     const response = await fetch(url);
//     var data = await response.json();
//     console.log(data);
//     }



// funcName(url)

$(document).ready(function() {
    $('#sendData').click(function() {
        searchVal = $('#search').val();
        // arr = searchVal.split(' ')
        // url= 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=9b75fe07e26e9705743e37f526b74aff&tags='+arr[0]+'&text='+arr[0]+'&per_page=5&format=json&nojsoncallback=1&auth_token=72157720844283712-85637360df53dab0&api_sig=c2f11e82c29072ccc449513685b04c25'
        // url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=9b75fe07e26e9705743e37f526b74aff&tags=&text='+arr[0]+'&per_page=5&format=json&nojsoncallback=1&auth_token=72157720844283712-85637360df53dab0&api_sig=77fa671a012b496f911929a4b6eaa823'
        let flickrAPI = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=9b75fe07e26e9705743e37f526b74aff&nojsoncallback=1'
        // if(arr.length > 1) {
        //        $.ajax({
        //         url: 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=9b75fe07e26e9705743e37f526b74aff&text='+arr[0]+'&'+arr[1]+'&per_page=5&format=json&nojsoncallback=1&auth_token=72157720844283712-85637360df53dab0&api_sig=c2f11e82c29072ccc449513685b04c25'
        //     })            
        // } else  if(arr.length == 1){
            // url: 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=9b75fe07e26e9705743e37f526b74aff&text='+arr[0]+'&per_page=5&format=json&nojsoncallback=1&auth_token=72157720844283712-85637360df53dab0&api_sig=a28b866852968ad20e7a9477d0c579d8'
            
            console.log(flickrAPI);
            $.getJSON( flickrAPI, {
                tags: searchVal,
                per_page: 5,
                format: "json"
              },
               function( data ) {
                console.log(data);
                    $.each( data.photos.photo, function( i, item ) {
                        // $( "<img class='ui-state-default'>" ).attr( "src", 'https://live.staticflickr.com/65535/'+item.id+'_'+item.secret+'.jpg' ).appendTo( "#show-img" );
                        var url = 'https://farm' + item.farm + '.staticflickr.com/' + item.server + '/' + item.id + '_' + item.secret + '.jpg';
                        $('#show-img').append('<li><img src="' + url + '"/></li>');
                      });
                
              });
    // }        
    });
    $( function() {
        $( ".sortable" ).sortable();
      } );
  });
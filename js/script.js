var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'This is film about young boy in magic world and her adventures',
        image: 'http://www.etv.co.za/sites/etv.co.za/files/styles/large/public/Movie-5-Harry-Potter.jpg?itok=ns52dciG'
    },
    {
        id: 2,
        title: 'Lion King',
        desc: 'Film about young lion and her father older lion',
        image: 'http://www.lionking.org/~nafklt/pictures/litho&other/tlkc.jpg'
    },
    {
        id: 3,
        title: 'Terminator',
        desc: 'This is film about future robots and show war with machine',
        image: 'http://critic.co.nz/files/article-5076.jpg'
    },
    {
        id: 4,
        title: 'Iron Man',
        desc: 'Iron Man is about man who create special suit and fith with bad people',
        image: 'https://hellotorrents.net/wp-content/uploads/2017/10/Iron-Man-1-Game.jpg'
    },
    {
        id: 5,
        title: 'Hulk',
        desc: 'Hulk is about man who is doctor and when is very nervouse he transform in green and very strenght monster',
        image: 'https://daveknickerbocker.files.wordpress.com/2013/05/hulk.jpg'
    }
];

var moviesElements = movies.map(function(movie) {
   return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.image, alt: movie.title})
    );
});

var element = 
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));

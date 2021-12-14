function affichage(genre,age) {
    if (genre == 'homme') {
        if (age>18) {
            document.write('je suis un homme majeur');
        } else {
            document.write('je suis un homme mineur');
        } 
    if (genre=='femme') {
        if (age>18) {
            document.write('je suis une femme majeure');
        } else {
            document.write('je suis une femme mineure');
        }
    }
    }
}
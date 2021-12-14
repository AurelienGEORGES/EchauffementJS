function plusmoins(nombre1,nombre2) {
    if (nombre1 == nombre2) {
        document.write('ces nombres sont égaux');
    } else if (nombre1 <= nombre2) {
        document.write('le premier nombre est inférieur');
    } else {
        document.write('le premier nombre est supérieur');
    }

}
plusmoins(5,3);
function newImg (element, left, bottom, img) {
element = document.createElement('img');
element.src = img;
element.style.position = 'fixed';
element.style.left = left;
element.style.bottom = bottom;
document.body.append(element);
};

function newItem (item, left, bottom, img) {
    item = document.createElement('img');
    item.src = img;
    item.style.position = 'fixed';
    item.style.left = left;
    item.style.bottom = bottom;
    document.body.append(item);
    item.addEventListener('click',  function() {
        item.remove();
    })
}

let greenCharacter,
pineTree,
tree,
pillar,
crate,
well,
sword,
shield,
staff;



newImg(greenCharacter, '100px', '100px', 'assets/green-character.gif');
newImg(pineTree, '450px', '200px', 'assets/pine-tree.png');
newImg(tree, '200px', '300px', 'assets/tree.png');
newImg(pillar, '350px', '100px', 'assets/pillar.png');
newImg(crate, '150px', '200px', 'assets/crate.png');
newImg(well, '500px', '425px', 'assets/well.png');

// assets/tree.png (200px from the left, 300px from the bottom)
// assets/pillar.png (350px from the left, 100px from the bottom)
// assets/crate.png (150px from the left, 200px from the bottom)
// assets/well.png (500px from the left, 425px from the bottom)

newItem(sword, '500px', '405px', 'assets/sword.png');
newItem(shield, '165px', '185px', 'assets/sheild.png');
newItem(staff, '600px', '100px', 'assets/staff.png');

// assets/shield.png (165px from the left, 185px from the bottom)
// assets/staff.png (600px from the left, 100px from the bottom)
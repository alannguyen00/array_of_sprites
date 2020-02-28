controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let value of list) {
        value.setPosition(Math.randomRange(0, 170), Math.randomRange(0, 100))
    }
})
let list: Sprite[] = []
let food1 = sprites.create(img`
4 4 4 . . 4 4 4 4 4 . . . . . . 
4 7 7 4 4 7 7 7 7 7 4 4 . . . . 
b 4 7 7 1 7 1 1 1 7 7 7 4 . . . 
. b 7 7 7 7 1 1 7 7 1 1 7 4 . . 
. b d 7 7 7 7 7 7 7 7 1 1 7 4 . 
b 4 7 7 7 7 7 7 7 7 7 7 1 7 4 . 
c d 7 7 7 7 7 7 7 7 7 7 7 7 7 4 
c d 4 7 7 7 7 7 7 7 7 7 7 1 7 4 
c 4 7 7 7 d 7 7 7 7 7 7 7 7 7 4 
c 4 d 7 4 7 d 7 7 7 7 7 7 7 7 4 
. c 4 7 7 7 7 d d d 7 7 7 7 7 b 
. c 4 d 7 4 7 d 4 4 d 7 7 7 4 c 
. . c 4 4 d 4 4 4 4 4 d d 7 d c 
. . . c 4 4 4 4 4 4 4 4 7 7 7 4 
. . . . c c b 4 4 4 b b 4 7 4 4 
. . . . . . c c c c c c b b 4 . 
`, SpriteKind.Player)
let food2 = sprites.create(img`
. . . . . . . . . . b 2 b . . . 
. . . . . . . . . b 2 b . . . . 
. . . . . . b b b b b b . . . . 
. . . . . b b 1 1 1 1 1 b . . . 
. . . . b b 1 f 1 f 1 1 d f . . 
. . . . b 1 1 1 f 1 1 d 4 c . . 
. . . . b 1 1 f 1 f d d 4 4 . . 
. b b b d 1 1 1 1 1 4 4 4 4 4 b 
b d d d b b d 1 1 4 4 4 4 4 b . 
b b d 1 1 1 b 1 1 1 1 1 1 b . . 
c d c 1 1 1 1 d 1 1 1 1 1 1 b . 
c b d c d 1 1 b 1 1 1 1 1 1 b . 
. c d d c c b d 1 1 1 1 1 d b . 
. . c b d d d d d 1 1 1 b b . . 
. . . c c c c c c c c b b . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
let food3 = sprites.create(img`
. . . . . . b b b b a a . . . . 
. . . . b b d d d 9 9 9 a a . . 
. . . b d d d 9 9 9 7 9 9 a a . 
. . b d d 9 2 9 9 9 9 9 9 9 a . 
. b 9 d 9 9 9 9 9 b 9 d 9 9 a b 
. b 9 9 9 9 9 a a 9 9 9 9 9 a b 
b 9 9 9 9 9 a a 9 9 9 9 d a 4 b 
b 9 9 5 9 b a 9 9 9 9 9 d a 4 b 
b 9 9 9 9 9 9 9 9 8 9 d a 4 4 e 
a 9 4 9 9 a 9 9 9 9 d a 4 4 4 e 
a 9 9 9 9 9 9 9 d d a 4 4 4 e . 
a a 9 9 9 d d d a a 4 4 4 e e . 
. e a a a a a a 4 4 4 4 e e . . 
. . e e b b 4 4 4 4 b e e . . . 
. . . e e e e e e e e . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
let food4 = sprites.create(img`
. . . . . . b b b b . . . . . . 
. . . . . . b 4 4 4 b . . . . . 
. . . . . . b b 4 4 4 b . . . . 
. . . . . b 4 b b b 4 4 b . . . 
. . . . b d 2 2 2 4 b 4 4 b . . 
. . . . b 5 5 5 5 2 4 e 4 4 b . 
. . . b d 5 d 5 5 2 2 4 e 4 4 e 
. . . b 5 5 5 5 d 5 2 2 e e e e 
. . b d 5 5 d 5 5 d 5 2 2 e e e 
. . b 5 5 d 5 5 5 5 5 5 2 d e e 
. b 5 5 d 5 5 5 5 5 d 5 d d e 4 
. b 5 5 5 5 d 5 5 5 5 d d e 4 . 
b d d 5 5 5 5 5 d d d 4 4 . . . 
b 5 5 5 5 d d 4 4 4 4 . . . . . 
4 d d d 4 4 4 . . . . . . . . . 
4 4 4 4 . . . . . . . . . . . . 
`, SpriteKind.Player)
let food5 = sprites.create(img`
. . . . . . . . . . . . 3 3 3 3 b b . . b b 3 3 3 3 3 . . . . . 
. . . . . . . . 3 b b 3 3 3 3 3 d 3 b 3 3 3 d 3 3 3 d 3 3 . . . 
. . . . . . . 3 b d d 3 3 3 3 3 d b d 3 3 d 3 3 3 3 3 3 3 3 . . 
. . . . . . . b d d d d 3 3 3 3 b d 3 3 d 3 3 3 d d 3 3 3 3 3 . 
. . . . . . 3 d 3 3 3 d d 3 3 3 b 3 3 d 3 3 3 d d 3 3 d 3 3 d 3 
. . . . . . 3 d 3 3 3 3 3 d d 3 d 3 3 d 3 3 3 d 3 3 d 3 3 3 3 3 
. . . . b b 3 d 3 3 3 3 3 3 d d 3 3 d d 3 3 3 d 3 d d 3 b 3 3 b 
. . . b 3 d 3 d d 3 3 3 3 3 3 d d 3 3 d d 3 3 d 3 d d d b b d b 
. . . 3 d d d 3 3 d 3 3 3 3 3 3 d d 3 3 3 d d d d d d d b . b . 
. . 3 3 3 3 3 3 d 3 d d d 3 3 3 3 d d 3 3 d d d d d d 3 3 . . . 
. . 3 3 3 3 3 3 3 d 3 3 3 d d 3 3 3 d d 3 3 3 3 d d 3 3 3 3 . . 
. . b d d d 3 3 3 3 d d d 3 3 d d 3 3 3 d 3 3 3 3 3 3 3 3 3 . . 
. . 3 3 3 d d d 3 3 3 d d d d 3 3 d d 3 3 d d d 3 3 3 3 d d b . 
. . 3 3 3 3 3 d d 3 3 3 d d d d 3 3 d d 3 3 3 d d d d d d d b . 
. . . b d 3 3 3 3 d 3 3 3 3 d d d 3 3 d d 3 3 3 3 3 3 3 d 3 b . 
. . . 4 d d 3 3 3 3 d 3 3 3 3 d d d 3 3 d d d 3 3 3 d 3 3 3 b . 
. . 4 d b d d d d 3 3 d 3 3 3 3 3 d d d d d d d d d d d d b . . 
. 4 d d b d d d d d 3 3 d 3 3 3 d 3 3 d d d d d d d d d 3 b . . 
. 4 d d d b 3 3 d d d 3 3 d d 3 3 3 d 3 3 3 d d d d 3 b b . . . 
. 4 d d 5 5 b 3 3 3 d 3 3 d d 3 3 3 3 3 d 3 3 3 3 b b b . . . . 
. 4 4 5 5 5 5 b 3 3 3 d 3 3 d d d d 3 3 3 3 3 3 d d b . . . . . 
. 4 4 5 5 5 5 5 b d 3 d 3 3 3 d d d d d d d d d d d 3 . . . . . 
. 4 5 4 5 5 5 5 5 b b 3 d 3 3 3 3 d d d d d d d 3 3 3 . . . . . 
. 4 5 5 4 5 5 5 5 5 5 b 3 3 3 d 3 3 3 3 3 3 3 3 3 3 . . . . . . 
4 5 5 5 5 4 5 5 5 5 5 5 b b b 3 3 d 3 3 3 3 3 d 3 3 . . . . . . 
4 d 5 5 5 5 4 5 5 5 5 5 5 5 d b b b 3 d 3 3 d 3 3 . . . . . . . 
4 d d 5 5 5 5 4 5 5 5 5 5 d d d d d 4 3 3 3 3 . . . . . . . . . 
4 5 d d 5 5 5 5 4 4 d d d d d d d 4 . . . . . . . . . . . . . . 
. 4 5 d d 5 5 5 5 d 4 4 d d d d 4 . . . . . . . . . . . . . . . 
. . 4 5 d d 5 5 d d d d 4 4 4 4 . . . . . . . . . . . . . . . . 
. . . 4 5 d d 5 5 4 4 4 . . . . . . . . . . . . . . . . . . . . 
. . . . 4 4 4 4 4 . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
list = [food1, food2, food3, food4, food5]

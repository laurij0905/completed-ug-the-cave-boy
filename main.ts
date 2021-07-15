controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runMovementAnimation(
    mySprite,
    animation.animationPresets(animation.parachuteLeft),
    2000,
    false
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runMovementAnimation(
    mySprite,
    animation.animationPresets(animation.waveRight),
    1000,
    false
    )
})
let ender_pearl: Sprite = null
let door: Sprite = null
let otherSprite: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`myImage2`)
pause(2000)
mySprite = sprites.create(assets.image`Ug`, SpriteKind.Player)
scene.setBackgroundImage(assets.image`myImage5`)
mySprite.setStayInScreen(true)
mySprite.setBounceOnWall(true)
mySprite.setPosition(44, 99)
controller.moveSprite(mySprite)
forever(function () {
    otherSprite = sprites.create(assets.image`myImage7`, SpriteKind.Food)
    otherSprite.setPosition(63, 79)
    if (mySprite.overlapsWith(otherSprite)) {
        scene.setBackgroundImage(assets.image`cave man back drop`)
    }
})
forever(function () {
    door = sprites.create(assets.image`door`, SpriteKind.Food)
    door.setPosition(94, 79)
    if (mySprite.overlapsWith(door)) {
        scene.setBackgroundImage(assets.image`UG kills Mamoth`)
    }
})
forever(function () {
    ender_pearl = sprites.create(assets.image`ender pearl`, SpriteKind.Player)
    ender_pearl.setPosition(125, 77)
    if (mySprite.overlapsWith(ender_pearl)) {
        scene.setBackgroundImage(assets.image`the house`)
    }
})

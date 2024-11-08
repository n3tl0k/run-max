namespace SpriteKind {
    export const max = SpriteKind.create()
    export const coin = SpriteKind.create()
    export const crab = SpriteKind.create()
    export const StatusBar = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    for (let index = 0; index < 1e+46; index++) {
        game.gameOver(false)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (max.vy == 0) {
        max.vy = -170
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.gameOver(false)
})
let crad: Sprite = null
let coin: Sprite = null
let max: Sprite = null
scene.setBackgroundColor(9)
max = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 8 8 8 8 8 . . . . . . 
    . . . . . 8 5 8 5 8 . . . . . . 
    . . . . . 8 8 8 8 8 . . . . . . 
    . . . . . 8 5 5 5 8 . . . . . . 
    . . . . . 8 8 8 8 8 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(max, 100, 0)
tiles.setCurrentTilemap(tilemap`level8`)
max.ay = 350
scene.cameraFollowSprite(max)
for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
    coin = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 4 4 4 4 4 4 5 f . . . 
        . f 5 5 5 1 1 1 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 1 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 1 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 1 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . . f 5 1 5 5 1 1 1 5 5 f . . . 
        . . . f 5 4 4 4 4 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.coin)
    animation.runImageAnimation(
    coin,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . f 5 5 4 4 5 f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . f 5 4 5 5 5 5 5 f . . . . 
        . . . f 5 4 1 5 5 5 5 f . . . . 
        . . . f 5 4 1 5 5 5 5 f . . . . 
        . . . f 5 4 1 5 5 5 5 f . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f 5 1 1 5 5 f . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . f 5 5 4 4 5 f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . f 5 4 5 5 5 5 5 f . . . . 
        . . . f 5 4 1 5 5 5 5 f . . . . 
        . . . f 5 4 1 5 5 5 5 f . . . . 
        . . . f 5 4 1 5 5 5 5 f . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f 5 1 1 5 5 f . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . f 5 5 4 4 4 4 5 f . . . . 
        . . f 5 5 5 1 5 5 5 5 5 f . . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . . 
        . . f 5 4 1 5 5 5 5 5 5 f . . . 
        . . f 5 4 1 5 5 5 5 5 5 f . . . 
        . . f 5 4 1 5 5 5 5 5 5 f . . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . . . f 5 1 5 1 1 5 5 f . . . . 
        . . . . f 5 4 4 5 5 f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    tiles.placeOnTile(coin, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(assets.tile`myTile6`)) {
    crad = sprites.create(img`
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . 
        . . . . . . f 4 f . . . . . 
        . . . . . . f 2 f . . . . . 
        . . . . . f 2 2 2 f . . . . 
        . . . . f 4 2 2 2 4 f . . . 
        . . . . f 2 2 5 2 2 f . . . 
        . . . f 4 2 2 5 2 2 4 f . . 
        . . f 4 2 2 2 5 2 2 4 f . . 
        . . f 4 2 2 2 5 2 2 2 4 f . 
        . f 4 4 2 2 5 5 5 2 2 4 4 f 
        f 4 4 2 2 2 5 5 5 2 2 2 4 f 
        `, SpriteKind.crab)
    tiles.placeOnTile(crad, value)
    tiles.setTileAt(value, assets.tile`myTile6`)
}

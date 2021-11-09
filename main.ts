basic.showString("START in")
basic.showString("3-2-1 G0")
let cupcake = game.createSprite(2, 2)
let cupcakeOnPlate = true
let tolerance = 200
while (cupcakeOnPlate) {
    if (input.acceleration(Dimension.X) > tolerance) {
        if (cupcake.get(LedSpriteProperty.X) == 4) {
            cupcakeOnPlate = false
        } else {
            cupcake.change(LedSpriteProperty.X, 1)
            basic.pause(200)
        }
    }
    if (input.acceleration(Dimension.X) > tolerance) {
        if (cupcake.get(LedSpriteProperty.Y) == 4) {
            cupcakeOnPlate = false
        } else {
            cupcake.change(LedSpriteProperty.Y, 1)
            basic.pause(200)
        }
    }
    if (input.acceleration(Dimension.X) < -1 * tolerance) {
        if (cupcake.get(LedSpriteProperty.Y) == 0) {
            cupcakeOnPlate = false
        } else {
            cupcake.change(LedSpriteProperty.Y, -1)
            basic.pause(200)
        }
    }
}
basic.showString("Game Over")
music.playMelody("F E D D D - - - ", 120)
basic.showIcon(IconNames.Skull)
basic.forever(function () {
	
})

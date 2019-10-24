//=======//
// Space //
//=======//
const Space = {}

{

	//========//
	// Public //
	//========//
	Space.make = (world, id) => {
		const space = {
			world,
			id,
			atom: undefined,
			colourOffset0: id*4 + 0,
			colourOffset1: id*4 + 1,
			colourOffset2: id*4 + 2,
			colourOffset3: id*4 + 3,
			emissiveOffset0: id*3 + 0,
			emissiveOffset1: id*3 + 1,
			emissiveOffset2: id*3 + 2,
		}
		return space
	}
	
	Space.setAtom = (space, atom) => {
		space.atom = atom
		if (atom == undefined) {
			Space.setColour(space, false)
			return
		}
		Space.setColour(space, atom.type.shaderColour, atom.type.shaderEmissive, atom.type.shaderOpacity)
	}
	
	Space.setColour = (space, colour, emissive, opacity) => {
		World.setSpaceColour(space.world, space, colour, emissive, opacity)
	}
	
}
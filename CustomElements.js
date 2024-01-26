SpaceTode`
    element bluonium {
        prop state SOLID
        colour "#006eff"
        category "Custom"
        maybe(1/2) {
            given A (element) => element.state > SOLID && element.state !== EFFECT && element != bluonium
            
            @A => .@
        }

        mimic(Powder)
    }
`
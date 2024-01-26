SpaceTode`
    element dne_element {
        prop state SOLID
        colour "blue"
        category "Custom Element"
        rule {
            @ => _
            _    @
        }
        for(xy) {
            @. => _.
            ._    .@
        }
    }
`
SpaceTode`
    element dne_element {
        prop state SOLID
        colour "blue"
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
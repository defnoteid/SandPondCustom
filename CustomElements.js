SpaceTode`
    element dne_element {
        prop state SOLID
        colour "blue"
        category "Custom"
        rule {
            @ => _
            _    @
        }
        for(xz) {
            @. => _.
            #_    .@
        }
    }
`
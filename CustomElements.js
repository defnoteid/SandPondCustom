SpaceTode`
    element bluonium {
        prop state SOLID
        colour "#006eff"
        category "Custom"
        rule {
            @ => _
            _    @
        }
        for(xz) {
            @. => _.
            #_    .@
        }

        mimic(Powder)
    }
`
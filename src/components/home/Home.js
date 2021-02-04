import React from "react";
import Product from "../product/Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/Brand/JD/2021/Jan_default_onsite/XCM_Manual_1302634-gw_desk_tall-control-en-2x_56692bd7-443d-4ff8-a7c2-09ed2ae16e64._CB411473854_.png"
          alt="Amazon"
        />
        <div className="home__row">
          <Product
            id="6"
            title="Bird Watch"
            price="23.45"
            image="https://images-na.ssl-images-amazon.com/images/I/511CwlZqtYL._SX397_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="1"
            title="TCL 4K Smart LED TV, 50 Inch (50S435)"
            price="198.00"
            image="data:image/webp;base64,UklGRo4WAABXRUJQVlA4IIIWAACwZACdASosAb8APrFInEgkIiwhp1ItqYgWCc3GPXRyR9BB14/iaYrjy945rdkr03bgT+0egbzrfSh5uXUqbz//fLCv/S9L56R9xfj3dRO1f9n61P5b/a+NfxA1CPVf+p4dPVfML9kvpH/E9Ej6z/H+i32L9gD9aP+V6wf7fxLPuv+s/YD4Av6H/iv+z/afYY/8P9n6A/qn9rPgK/XvrQful7Mf7oB66zaI2UszB+fs1Enbiw0+4zEzKTxndq4Uqge0ghNTpVJfMoSTeQmreF6aFhRRGHb8y+UFLbhKEc6Kf5j5AZli24rnQI/dKvj60L4p2T4BN2SS2HqOkU3tqxn21nPtFSjcaOJ/NjiEyoEHta1gZetANuYmHhB7FpRQywfBwnTsr57K2FF4+wJWzmsY8iNr9KDto46ZVof8o6S10gRPOMJRMesXo1R+9ezXaCzHwDyl3yDcpqESH1bundUYetJvS16bNoRSzSOiMMVGkOCLGpKzDOHLcnQ4x4OahS5rGb3OqWNQJAbDc/qvrG5ZZBpdWIFEaAW2g6l7hG9QHkMYDkS8BO9IQNhC43hJSlbyRGPpnjknrhgq+WpSAVv7OMiLDfqziOS2jO2g1e4U2ya+1UN5TUFmkpSejCPwm3IMYJD9d6yw0mzA0dyMApKkMhAUw6tociztaMLcATMLVtV2l8dq+DmsBQVJVFIHJEvXvA1H1QdDPJRDVo7/TJXfLgj6ZknPXtYB4cpzbOXUSKKtRYXz4uT0C2+s0ZIsmnGxykzr+upMA0u9iXqDQ1pcKKGQDahNZSPxOYkOZIHIUiZ9s5wfwfhIx2FJaulqwL0eYeX4PQWY7UKm5kXNKtiSR9AHB/IKYvv2utDinRv7FItPVzA8lm+ePC4PuWq32w6UfNQlZD3dPdflPsR0YnUVAfy9f88hfbCf2T4qGz/8lrdH7738JIOlbxAOSYKeVKVkd880Zegii/IdugcuwjHg7saWj0WaEfdTzCFsHJBvZ/7J1Junyfs8iY+QPOBpFG7ykVbEBOT1342/g4ies4EVcmKAmNDbgVU1//SugaCS6/XxzArE2j+fP8RDFsQAAP64NnuSJ/Hjo3Ccn0ESoEywrv1YqfD0EsIljp49AKZMubKnEAbsf0C1SfUSqvB6rXokQR7kK9W/OTyl1n0sFEqssz598xXxsZ+hVaHz6eIke8LeeGw+jw9gS2gy7XroXxvFIWjPZOx4ZPnp3p9G03OjvTEg+SkxAeu7PbD3Tb6wXsl7atvYD+HZvqAWZnoDAIwG9jC0NSRVQnkUw1oR8SPQyJWGqdgHFd08WpKy0NoPIGePZaXEu2kYAQa/ktLUxlv/6yiPSX5T3PnglY0jSho4aJ+ppQMXImtVGU8BXWL++4ikCkCJwsd7cfTL4NcBRtpiDLFkC5dsbPSM458vUdLdQuGdFjka3FHszYVOicnldOF3673DyFL2gfGXm/tseTsIQpD8P5HhH8M5ykx/cv+yy3xKgo49fH7jmA688G7aUcR7qVxIp46f/kv7nmrbu73g0R/ToImDURQv/Rri1LnbTAtYmfl4D8L599fcGyvp3BqJgXyOKuzBGj63Q/kmpjTzSkTmwe1gf+6ie/tcfoe/uWqRkp/c+9qRmtOx03crdgn85kRiQKgxko367YbSRsxbIxsJAc+qvFTt//+2cTaum0p/bjraMTcAarl5AqhSjCwuIBD6CmiwF3xaQMjoKjgG5KsXknvugeNLWKpv4FGovEFAahX8k6vMzAJtgtsPxAFtYYkN2tGhYXJDKYTLwjphEVBQruFEEDxdtqBd1HPq9e5DYfT629XrmwLd16RSrJ5piGvQbcGBNj2btgtJ/T2zjpBLYodNP1wcQ9KggI54qdAYJXabpfkJ05k2ELsuS0IwUYo3gcm6Q5jtVvTCD2sEtopguUz/LrokOcuacvnteVmkl7cMNFAiblwU8hvXqy4MoVaOTJb0zOf+85xPkA7y4zkjKrKgTWjcE1oUot4XpwD097V9BUg03Up/njh+wJl4RBuCEacrKH064CFigHxBVdZt5CZOUOKSgrg8Hipgt21VZsIEq6IoNi6lxvZ1qNw53KBGC5t1HOhS3Td0yGl1YuGa5e8WZlRbgPeXOQPKBi1bZ/AC+1U9RTxeF5jWMjb+Vhryg5yezfMYL9/za/3/2V+oGcf8x57lB3zhfkKZR+vLI56P3sgrutqRuylQn91ghMMJfgwLKL2ytM188ozira+KN1VLvh7rEl7mj411xeN/lMuuBbDxMJF/sGv4s80HdKmHiyPgmd9df7IoPTcib8piA9nZSoBKY0cqxLjSlGmzzH8xq4qTWPboTyNXR1rwo3706rgXVT67GaPf3ABNC/EDfKAa6vquue/fMVgfN5/VXpPDGZ9K9JD5i9kKsXdzDJJkRXAyXfXN/rY+89g06VJxdbZjdKf7QuXao3p2BPXkc5N/3Ib8aPDvQfR3kks407eK/64iJ7hohjyKk00a1XYB2385DMRnSDQ08KmpMVxuXVUXfX7dubOOOZJPLgAEg5Bbl+oPRFeP3E1mDNaYJ5rM61lRIlaUNHqPXV/0xUes5LhjIbOH6EGPVgKJFvXqHoUd5Nb4Ml2pciCDodfNK0HxFONMtzECtnjr3+FyQI8HDpas7tztau/g9AceE+fg2oU4mcx9l5i7sw0mpothlfSrPmtWBlknUoMIY+LijjzQfcHaD9nkN3CTE5jpw6RQYSLyxQnZNa9QGvC2vQkt5vbGtXhU3pANe22+fVWFBPn1S4efn3RkLolo439eyP82k4aIkTSf1HHxj3V0fjcsMOTFhXUSYgTGbGJqRTxlKxIIpVxiCjGiAjS0FIGhfebr2G+s04AjFl3bgfQ9OxV3Zx+7HTbrS93zjjZQbdiD6mn3gBYoBdbyNY4tfxJeqk4h7fXh2+UNClHT/AEXV/X5+g7Q7lMO/fEmi80QEcrZNgmNpEdux4c/2GJ9riKB8cbRe54fbm/emLyRgCNWMzskcLDok3ro5t/RU4YfLnoAxHaGPmzzMLoWzQhTM1VUzjcE0cU8VS9zYQ8OTLfNDxCP44khxPjBFiWOm70POxdkvzmqMlM1JBQqvDJ+ihIPbZm/zhonw6pUHb1/w+AhkBpaA1k8ebOuz8m/4Zgpi49RGNqrgH9YhOyQnsmon/nePASbqSrcw2DDsklMvv/HCGJIo/tWNA0C5uRfgWydV1kA0G45/Ru2Yi/th8Z2PEGrVkIH3GVDYEq4PWtmj7BPvDOLsqGGUtaeoYHZaLosP/wZu/A6L+GFykobGg3zAePGutzKv3a1HUcRS8q4yYuHRaCXVZNQeXvdiIMa7lNdjd+XQZf6aTsQadARjDLS8WumnXgtVzKiZUSz9mGHxIfvPBHD+V3K68rL8UM8wscGH8rTt/zNQIrT9OntnrO1369cJ9Lx2RyUDd0k6oXqHOrpC/npQxE8S0EtSkvihmlvp6BmCVmZJLm8xsDqzLxjezGHjgmk4wKixUJDqAjYEsK276DvLolD5cdwAXPzzI5NGS+ne+tc8zIyKwKLAaXIcRsWTMHYf4477smSWYfg30Dn1LSo7A+752LZU2/x3MILdHjgmQNikuH17zK+KrshBOLbCRiqRJ51ucFzOKWwa2CspvMX2qQB189rWGQCeubT3Rrj+FwpFjaFJeDYeJbl33Ow1m3Jlene6czJVn2j7WIvxXrCxKWHj6MH0hr9OTT0o/bPiEotdr67idhGPJMfo7yFYoS6+sYv2pTYp7CSmzfy2JYw9guyzAtXr7vC34sSWNAjb0Mb8MDgxCTbR3AsOx9gwnSBOXxIaNnYUgh8VRI/rxvihi10dqPa+HhHJajUiPcOGla27C4QYIRrsRvu6x3mxNrQ0e7GnMpRUrmmA6ow023rcLx5q1VSpO8tTs8HPfoYpE5pX4K1loDayNH14RzjjoThVqSK13Gpmljz8PIQWFIEWsVhdXteXmnVIbN92pUB8PqA6jrmtQfdb/MkVf07EMX8bO79VxW1ayKPSGmV7ViiIiDYu8gHWB0sHrbl6fMRaD1otWZZxqY+MhKtMJpKfbW419spehtjNNMm8+QmHd+zMc63pR1g8P4r8rvecZgCPPI2QclXVOr9boE786W91Fb8cDUwvv7WTMW74UJCXGfUKlupBl6BdIv/nYu06xYtvyfSiq3cyLf0//HeD7xUzShtY965de0oEPzjyedU6SEPm+bLVZ2vD901cpjsnncXwe1O0PiScu4r838glIP5lMcGelKu7NP6e/dtgr0BPCZn+OH5d4ulPsxW4GfkZ9sj62khj38CIx5/jY+EqltmX4cDOy64EhAMTB55Pa8Ow78uiBPtZHa28n/YNDWQG+clX/jqIGznzVKcQHP8PCfsFcew/d3D+fJWkla6qJIrNLBJtlNwKMvgzhu0nkbxdy/uIf8DVQ44F2TMnmJeCidl//xR4YuelujKJWcLdgxAIMXBtvmZjDtQyEWMxwLZOGRFYEV8noZkymZYsizURjy0y67+Msq6oMqT77zNlGbhRd1/tv62SxMQ7iNXeu5+nzRowcLc+b0Xzxyi8fY1Kb4Ier/KxbOZvqOLqbAaMSv9N7J8+x8kI1UpzCK6JFZUeGIU7+1f7st9flP+g+T+zZkBlqgjGP1IVZpWwQU32G+8OD3xxBJC50tBbeu/xRzgKXO/yfXrxe328SvkJ9lks2/hNSktn9r4Immmp0LkRl9c/uat8zdqK5JkrRi5+CCSROxYta6LY8dvFB4ZiR+Lf4y73DpM29/yRJd/AZYqedNhT/CRAZu6K2Uk3R4QN5wwdJ8re870Xk6un07iYrtxOFdyp1rB2mhxTAh8e+9x12z05xlw9NnFt229JpE82rQEZdlj8W0kbeyxZTdf0uSNIIDqnO/sHkv6D6r9En6vKgDoA+Si4he5vZcNYGG69eyt4EnmBOleyuFt/MZKHrzMMj5P+d1LGzVpB7TTYYasvlzRjzz8MDxN14tAQ+cAOtScXCLP1yAG6RbOZ79eg7xkKLQfkDsSjullqMHrfk3bavt2MXr9yv0vREzdniLZp2CuELmW6poClNHMgAgklKn+hUBXSMwUXQ9aYxN+cMS1RAQNSw7ir9L6df4+qlbu3qyxkuNT6TO/mcvNMq+Xe0Rss/2LgKppFRC57HsZRWEgGx9I5iMeoID+RLapxiGnuKr3tejBOve0VtJ+osKJu18SCIACSp0UrhKvJN2QkotKPglzT755+k9rxa0N+QbokLv1CRtLa3t2trOUJQfHYEihGVR3SOLP8q5stidsVOZDzjE7rc0cxxL86JmvR6+PoQmGTS4mMR/FSQCR2Ao1hxtxl/hJNGNDvV8jceMK4Ydcbbmz2f/IQICJBB5h/Fcygn5Viv/iFyXkKRECUANAI4o/POB48H1JtGhv6p/L5Ncr/gN/c1sMfIfOTa0QzZXfkkjRJIURbn7bHnSD7OPzGIuz+lgnQBmcy5D1T06nvYmZNG/XeXW3q8v/VGk4kS7rFlAUi9TchXJ8KkmJtCD3CH1dcmRvhaCEfmn407cdqwyIq0ysCTg8XtqIriXgBUwvqSmrl9BFdp9PCqz6PFcaF0NNdST4DRj9Fy0jY3fg0tbuDliP+spdS4ZVTIkOo02l6FU7wgD7QLkegpipcRa+OvQdn442Neta8XjCPTTY+H8WdGBSQNfjCaIqf6giBtNT2S47MMHc/S4mxczDytdIbScFo8Rw045OeMudgSrKyYPbdLqEjPaCGC+7gbx2oFy64FftCqZhYjYmkcwTtVzip5SD4JhNC+UpGown99pUf1wuBV3xXo/3ksnoFhnUZUbYoiCCzPDjAIMsadr5+akKkQoLAJgMFIVAUquqiKDkp6Y3xgJFl2AZj/mu0Cso/oVNlCwQTYWiCOUN/j6UMfnoh9qAsfzkqLG/bFN7+m+wq3ulatGmuPsDli9MQgYGp5+bVkL2sz0Hi1YzRxXn7Iem7dt2YHchV3h8inP1KVtfFjkBW0+eJhpQuMS4zvxjZRZYu4PUeQ8jwQ4FcazMi3+i+t0bVdSzmj2DF48fPWp0+Tldm48P4/169Pp1UilRsB04dzyI1LoHO/RMmXKv+rvxGTrp1FcJazO1l08QZrlbgM4TLzMN5bxWusFieNweGMU7VY0quwpNqmLfv+rFZSRb0DgfHbQ2IwtzJZDWTxom9RyN5iF1d5TIXZ8A/CnXm/2eTsnKPQDtJKIQOZDoGxizmPl64l1MX90o8KxqWgfppN2bI4gzEqAy9B2aKISPaVoe1IsWA0qTEuEAyf5t97578eusKYvFkW7/sDmfNFNt/U/TrPAGwozlb1vdyv9s1bY7KE+kVOLJxSj/ED4+OrWJFZLwHdfVgEpBlHCHUsfr9tUf4IhM/+3juG6qDf9kGpzKWsgfMi3zN4nv3MRhheioh9Q3Vv/P5eQTelbcMryjvvnG2Sv2T7ErhiRycMyAujij8u1fNvyVuFhwOb/Bjb1mi46fOmFIlPEZL4Xb/HXxpCkj/VVVrzZ5RYcrIAkmsPrh/BH8Wm9XpJLlNAk0wY5XHaVS4tTgkj6xlLvT2c5i6UV8fgGr5+WoH17uBQME0xa8E93+buIrpG9VgP93qTE4mYe4+wUrr6nnctL6+g7nQxmnCDjbWrjWk5P6WCbu1Pi30cAVLMol/Z8w5T7VmCSgtsmMDWvfsVdUCsN962Pw7HWZH2QgNzD/vRrXRTF7GbcgDG1YNkis6pRrQnaRYD/yb2gK9mgd1hg19I6kem0nrLwN1pex4Uku6MTlOsyMv8uMyXcKbcXmLVoJfwSmEHHJDNo94jrOlbx2xDqgmQXeU0UjZOS4omFM5HvMCc6kjlhoOOWA0mK/Xf2n7L+GwpEZpCj+deCmQYvFOS8HcWQ7/NH5cb6h9/ymTrCAXeywUWqdkEHcYJmnp0Zqt8axN4i4becnUFbIHK+qExeYE5+UJfVKh/KDsussb8V5yedYpD+Yw+/CbEKH2w1fxr/k7uSTWAB365ElKEXduzwyn96t7I9XkvNL2inddkQ+jgNe6N2iiZvqlp5c9WoelRuHVXqgP+M7elTZ53hF6++LYrm3yqhrr9fKqIBGWpYbUAO0wxwJ+JbbzUw39XiioGfnJVgLqNf2wdBYK3lNkbtkqUZj7K/F73SCGTcHw5AviiUQqAv8WF2upeMlawA1UO0GSRD1xy21dswH4U0JzPSF5+POl3FHVASg+G9Vy7aUzPoRsJhWiPT8tcseiV+qYNtIz7csZpfbFAprB62uA2j27sw+wnzmzshhVVVnHqN4hWNvcWN/JIIXxS42Pcp/qWfNrvNACGa055/O874uvqAORp5NxHuIe2wH0g48DGzt6j+oMF5kLCLEtFbjwgKaukyHYOWiiP235/yMSpExOalgLiQMYJhaEFj6pBV2Obm8XmiG+BaLrqfjId81OTvMDmeXX6EmlRroKAmAqlaDTcesikQ1T0YlmPaISiRPztff44r+YkLsQ/lnAQBWIzBKNzXcmmNACzwPFz8EaxCkfGFrybfvJsAdaBQsswGUb7Iq8mahH5RDoib3IjWYSQksChRqbRT2dkZsoWa5RaWy5fmFz6K//bDN93SD1FVWBOZv72jckXhK5qcojxKYCadarjyeerkpMnGUZTFAHNgWlmcCqUgCbAErsj9fV8wAAA=="
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="2"
            title="Hand Mixer Electric, Utalent 180W Multi-speed Hand Mixer with Turbo Button, Easy Eject Button and 5 Attachments (Beaters, Dough Hooks, and Whisk)"
            price="23.56"
            image="https://images-na.ssl-images-amazon.com/images/I/61678JERhDL._AC_SL1500_.jpg"
            rating={3}
          />
          <Product
            id="3"
            title="Wilson NFL Super Grip Football"
            price="12.33"
            image="https://images-na.ssl-images-amazon.com/images/I/91MvyMn3UpL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="4"
            title="NERF Elite 2.0 Shockwave RD-15 Blaster, 30 Darts, 15-Dart Rotating Drum, Pump-Action, Built-in Customizing Capabilities"
            price="20.99"
            image="https://images-na.ssl-images-amazon.com/images/I/81mEHSkhnnL._AC_SL1500_.jpg"
            rating={2}
          />
        </div>
        <div className="home__row">
          <Product
            id="5"
            title="Backyard Discovery Tall Spiral Tube Slide - Right Exit, Green - Mounts to 5 Ft. Deck Height"
            price="390.77"
            image="https://images-na.ssl-images-amazon.com/images/I/81J7ruH7LVL._AC_SL1500_.jpg"
            rating={1}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

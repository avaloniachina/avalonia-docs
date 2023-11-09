"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[56907],{3905:(A,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>f});var t=r(67294);function n(A,e,r){return e in A?Object.defineProperty(A,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):A[e]=r,A}function c(A,e){var r=Object.keys(A);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(A);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),r.push.apply(r,t)}return r}function o(A){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){n(A,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(r,e))}))}return A}function a(A,e){if(null==A)return{};var r,t,n=function(A,e){if(null==A)return{};var r,t,n={},c=Object.keys(A);for(t=0;t<c.length;t++)r=c[t],e.indexOf(r)>=0||(n[r]=A[r]);return n}(A,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(A);for(t=0;t<c.length;t++)r=c[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(A,r)&&(n[r]=A[r])}return n}var i=t.createContext({}),u=function(A){var e=t.useContext(i),r=e;return A&&(r="function"==typeof A?A(e):o(o({},e),A)),r},s=function(A){var e=u(A.components);return t.createElement(i.Provider,{value:e},A.children)},l="mdxType",m={inlineCode:"code",wrapper:function(A){var e=A.children;return t.createElement(t.Fragment,{},e)}},p=t.forwardRef((function(A,e){var r=A.components,n=A.mdxType,c=A.originalType,i=A.parentName,s=a(A,["components","mdxType","originalType","parentName"]),l=u(r),p=n,f=l["".concat(i,".").concat(p)]||l[p]||m[p]||c;return r?t.createElement(f,o(o({ref:e},s),{},{components:r})):t.createElement(f,o({ref:e},s))}));function f(A,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof A||n){var c=r.length,o=new Array(c);o[0]=p;var a={};for(var i in e)hasOwnProperty.call(e,i)&&(a[i]=e[i]);a.originalType=A,a[l]="string"==typeof A?A:n,o[1]=a;for(var u=2;u<c;u++)o[u]=r[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},55791:(A,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var t=r(87462),n=(r(67294),r(3905));const c="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAo4AAAHBCAYAAADn6DrEAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAB7nSURBVHhe7d1vjF13nd9xP6laRSoPUNQnqOoTJB5UFQ9a0cpKFbZdVQKqUP4EtYWqacqmbNgACxWlwEJKFmXZbqKUotKSmi3JknTDn7AB0m3YpBucOHHskEwSHCcOCfkPdv7/95/k9HyP72/8m+PfzHxnfGc8zn291I8yM76ee+7ornj3nHvHmzoAAEgQjgAApAhHAABShCMAACnCEQCAFOEIAEDKcQ3H1157zczMzMwS2wjWLBxbD9jMzMzM1m5rbWrh2Dr4xfbqq6+amZmZ2SrWaqvFNm3HFI6tAxyv9YDLDh06ZGZmZmaJtVqqrNVg403DqsOxdUBl4wfTevCxgwcPmpmZmVlirZaKjbur1WZlx2rF4dg6iNj4oMcPavzgDxw4YGZmZmYr2Linxr017rFWs8VWa0Xh2LrjWH2A9cHXD6x+0Pv371+wV155xczMzMwaG3dT3VR1a9UNVrdZq91iq3FM4VgfVGwcjPUDKw+2/kG8/PLLC/bSSy+ZmZmZWb9xJ9UNtVREtuIxNu641UiH4/jO6gMpBziOxnEslgde/1BefPHF+b3wwgtmZmZm1q9upLqdxiFZR+Q4HmN1s417bqVS4Ti+k/oAWsFYonGxYKx/EPUP6PnnnzczMzOzfnUj1e20VECWDhsHZN1u465biWMKx1Y0luodB+M4FMsP5bnnnpvfs88+a2ZmZmb96kYax2QdkXVAlg5bKh7HXbcSKw7H5aKxVG8rGOtQLD+UZ555ZtjTTz9tZmZmNrN76qmnjvpa6aRxTJaIHAdk6bCVxONKLBuO9Tcud1bCsRWNpXrjAdSxOA7E+OE8+eSTw5544olh+/btMzMzM7N+pY9KL5WwrEOyDsjW2cdxPNYtVzde1qrCsVRrKxrLWcZ4IOWMYjzIEojxg9i7d2/361//uvvVr37VPf74491jjz027NFHHzUzMzOzfqWPopWimaKdSlCWiCxnIaO7SjzWZx/reCz9tq7huFw0lrOMEYwRiyUU4wGXOHzkkUe6hx9+uHvooYe6Bx98sPvlL3857IEHHjAzMzOzfqWPopWimaKfoqMiJCMiS0BGc40vX2fisW68rKmGYznTGA8gHkw8qHiAEYnxoOOHcP/993e/+MUvuvvuu6/bs2dPd++993b33HPPsN27d5uZmZnN3O6+++75la+VPopWimaKdoqOipiMtoqAjBN0caJuHI/HJRzrb5g92xinTOMBRDR+4hOfMDMzM7M1WJyFLPHYOvO4FvG44nBcLBrL2ca43h6XpuNMYzwoAACmKxorruDGmcd4OWBc6a3fOJOJxzULx/jGS4VjRGMcXFRuFG+cbYwKFo4AANMXjRWXsOOlgPEekjhpF1d8SzyO3zCzWDjW8ZiRDse4gzocW2cby2sb47RpXH8XjgAA0xeNFa+HjNc81mcdx++2Hp91rMOxxOOaheP4bGOJxnK2MQ40rrPHZep4IMIRAGD6orHuuuuu4Q0zcZW3nHVsXbJe7qzjuoRjOdsY0RgHFQdXLlPH28XjurtwBACYvmisO+64Y7hcHVd5o73irGN5l/ViZx2PSziWy9TlEnUcVBxcHGgcdJwyjQIWjgAA0xeNdfvttw+/tqdcro6XCpazjuN3WUeztS5XTz0c4xvW4Ti+TF3CsX59Y7xQMwp4peE4HHT//w4d7O/vYH9/Bw52B/f36//76qGVPTAAgNeraKzbbrut27Vr14LL1a2zjq3L1XU4lnjMWFE4lsvUJRzLaxvjoMrrG+Og45Rp/MLKlYTjEIWHXjscia+ODr7/NI7h4IH+AU4CEgBgVkVj3Xrrrd3Pf/7z4ZeDl8vVi511LJerSzhG0001HIeQm4RjOdtYwrF+fWMJxzi48vsb41+IiVOn2XCM+4kzjHGmcTmHj+fwgwQAmEXRWDt37uzuvPPO4WRdtFdcro4TePF+k/EvBZ/W6xxXHY7lMnVEYxxUCceo3bjWHm8RT4djnGnsw7F4+bn93S1X3NP94Nxt3ZVf3Nbd9O27uxeffmXyp3089uEYkZl5gADAiWPTpk2pbTRxTBFyi4k/m+ZxR2Pt2LFjeINMeZ1jXK6OE3hLXa5e93CMU5ytcIyDi8KN2o13VMc192w4HjpwJBof2bWvu+i93+2+8o//tPvPv/nd+X31n/1Z9+Bteye36obL1vHAl3P1Wf0T7KyrJ5+t1tXdWZs2dxftmXy6Gnsu6janv8ee7qLN1f+BbL6o/8rxMoXHDgBJmbiaZoBNS4ThX/mrf60Zj0v92WpFY23fvr2bm5sbTtZFe8V7TOrL1YuFY7TccQ3HOKhxOMY190w4xtnD8prGl557pTv/tEu6c0/9Zvfl3/iT7uIz/k/3xx++Zj4e/8tpP+ie2/fScNvX+r/z1FNPDx8vKmJt81ndWZuPNXzWMZ6GwNzULWjd/msXHVP7HsvxC0cA1s+JGo6hFYhrEY0hGuvmm28e3lld3iCz2Oscj3s41q9vjLONEY5xcOVX8awkHOPMYbz5JWz90591/2Hzf+0+f8r/6HZetfvwF3u7//Lh+Xi8/uI7Jl/te2rP0jWz56LN3ea+eMp/V2+94unwmcZjPkF6FOEIwInhRA7HUIdi/fG0RWPddNNNwzur6zfI1K9zXOoNMidsOB7Yf3D47w+3XNdd/MUrugv+1aXdBf/y28PXapd94v8N4Xj57/7l5Ctdt+OWHZOPWiLCJsEznHksl3sbcXb1WfOXg4dL2/0Tctj8jUbxNDkrWG535HtNbndR//0mf3YkWBd+j+b9DN/3rP6WS1jxfcfXj9z+8H0dvu1ZZ23uvza5v+W+73DcCy+hH7kNAExH/O/LcjK3OZ5KMK5VNIbZDccDh8Pxsj/6YXfhx77ZXfhvLxniceybH/6/Qzh+7X0/nHyl67Zu3Tr5qOGoWKzCL0Kxqp6IuKMjqA6m8cfV7YfgWvhn89877mc+BOvvUau+vuCYW6Z134dvuzBql/q+k49HPzcANrby/9FfbhtJ5ng22jGPCcc1DMfhUnUvfsXOtZff1J39987rPva2P+juvH6+croHbnus+8pvHn6zzP88488nX+26bdu2TT462p7R5en4/Ej0RAxVUVXH2hBc5f+YGvE0RNXCs4JHwrO63aD+fPRnrftpfO8FpnXf48+z33e4XR2cADBdmSjM3OZ4KdEY/60/nraZDcd4k0ssPLPvue5j//D3h3j8+N//Svffzr6iu/jjP+h+79RvdOf/o8uHcPxfv/WT4bYh3k3UFrFToqzekTiKkIwAKv+dfLEKqPos5TiejjHeFr2fxmX02jTuezD6fEXfN24el7iXOE4AWKX435flZG5zPLRCsfW1aZjdcOzvI/61mOKubfd255xy3vyZx0/9gwuHN8x8+Te+nQ/HOJt31CXfUZRFLA3vuK6Cqf57Q0y1wis+Hn2f+ehaKtCqjxe9n97kTOSCKOtvc/hd1VO470Hr8+z3PSzi0ZlHAKbtRA3HpQJxLeJxpsNxOOhDR/4lmCcee7r7zoV/3v3RmX/cXXjmJd2VF1zX/fgPt3eX/PZfdFf9/s2TW3XD29Bb4mxZK2oido5crj4ckgtfszf5Wv+E3LTg1/iM4mkIq3IWc7kga32Pxe5nYsH3j9tUEbyq++4/638mw98ZHu/4tr3M911weX3hGUoAmIYj/zuz9DaaOKalwjD+bJrHPbPhGIb7OLjyf0Zw27abJh8BAMyOmQ7HEL8EfP6fEpy85nEpcWyPPvLo5DMAgNkx8+EY4v7inxF86smnunvuube75ZZbhl+5s+3GbcNl6XhNY/yQtt+8fYjGOB4AgFkjHAEASBGOAACkCEcAAFKEIwAAKcIRAIAU4QgAQIpwBAAgRTgCAJAiHAEASBGOAACkCEcAAFKEIwAAKcIRAIAU4QgAQIpwBAAgRTgCAJAiHAEASBGOAACkCEcAAFKEIwAAKcIRAIAU4QgAQIpwBAAgRTgCAJAiHAEASBGOAACkCEcAAFKEIwAAKcIRAIAU4QgAQIpwBAAgRTgCAJAiHAEASBGOAACkCEcAAFKEIwAAKcIRAIAU4QgAQIpwXIEt2x7rTj53V7fpM3fbEjvp87u60y++s9u5c6eZmZmt8+bm5oZwWwvCMSmisRVJtvjEo5mZ2fHbWsSjcExypnHlizOPrSeymZmZrf3izOO0CcekVhjZ8ms9kc3MzGx9Nm3CMakVRbb8Wk9iMzMzW59Nm3BMakWRLb/Wk9js9bwdO3Z0l1xySffWt761+8hHPtK8Tey8887rNm3a1G3ZsmX+a9u3b+8+85nPdG94wxu60047rfvJT34y/2fxPT/wgQ90W7dunf+amdlymzbhmNSKIlt+rSex2et1EX7nnntu9+Y3v7l7y1vesmg4Xn311d3b3va27o1vfOOCcLziiiu69773vd0111zTffrTnx7iMr5+/fXXd+9///u7yy+/fP62ZmaZTZtwTGpFkS2/1pPY7PW6733ve9373ve+7sc//vEQja1wjDOSn/rUp7ozzzxzOKtYh2N8XP5O+Thu/7nPfW74O/Fxua2ZWWbTJhyTWlFky6/1JDZ7ve6WW24ZFh8vFo5XXXVVd8opp3SXXXbZcHaxDsdLL720O/3007uf/vSnQyx+9rOf7b7zne8cddnazCy7aROOSa0osuXXehKbzcJa4RhR+dGPfnQ4exivVRyH44033jiciYzXPp566qlDZH7wgx9ccBszs5Vs2oRjUiuKbPm1nsRms7BWOMZrFN/+9rcPr3GMSByHY9kNN9wwROYFF1zQnX322cNrJ8e3MTPLbNqEY1Irimz5tZ7EZrOwcThu27at+9CHPjT/hpelwjEWZxvf+c53DpF5/vnnd29605u697znPS5Zm9mKNm3CMakVRbb8Wk9is1nYOBy/8Y1vdO94xzu66667bvh8qXCMM4xxyfprX/tad+WVV3bvete7uu9///vdF77whe6Tn/zkUbc3M1ts0yYck1pRZMuv9SQ2m4WNwzE+jtcutlbfLvb1r3+9O+OMM4azlN/61reGN8xEaEZkjm9rZrbUpk04JrWiyJZf60lsNgsbh2O8U/raa6+dX1yCjndLf/WrXx3+rNwufofju9/97uEMY3xezjj+6Ec/Gn5HpDOOZraSTZtwTGpFkS2/1pPYbBY2DsfxWpeq4xL1Oeec033pS1+a/52N9b8mE5e6IyzL7c3Mltu0CcekVhTZ8ms9ic3MzGx9Nm3CMenkc3c1w8gW30mf39V8EpuZmdnab25ublIx0yMck7Zse6wZR7b4Tr/4zuYT2czMzNZ+EW/TJhxXIOLRmcflF2caRaOZmdnxWZxpXItoDMIRAIAU4QgAQIpwBAAgRTgCAJAiHAEASBGOAACkCEcAAFKEIwAAKcIRAIAU4QgAQIpwBAAgRTgCAJAiHAEASBGOAACkCEcAAFKEIwAAKcIRAIAU4QgAQIpwBAAgRTgCAJAiHFfghS1bugMnn9wffX/4ZmZm9rrfoZNO6vaefnq3c+fOE2Zzc3NDuK0F4ZgU0dh6QpmZmdnrfydaPMbWIh6FY5IzjWZmZrO7OPPYirONvDjzOG3CMavxJDIzM7PZWSvONvqmTThmNZ5AZmZmNjtrhdlG37QJx6zGE8jMbLyD/S7v93f6/fV+/6bfQ/3q27zU76J+f2uyL/Z7rl/58xf6fb7f35j8Nz4vf/aDfl/uF/dTvmZm67NWmG30TZtwzGo8gczMxoto/Kf9dveL4Lu037/ot7df/Pmhfn/Y77f7PdHvqX4Rjp/tV2LwL/r9x37xZ/++3w394uuP9Dtj8t9yf2a2fmuF2UbftAnHrMYTyMys3jP9IhK3V1+LGIwo/N7k84jBD/a7e/J57NF+/7zfLyef/8lk9cfxfT7XL844lr9nZuu7Vpht9E2bcMxqPIHMzOrFWcZ/Mvlv/fUIvzir+Fq/V/tFYJazi7FxOP5Zv/P6xSXtiM5r+l3b73cnXyt/z8zWd60w2+ibNuGY1XgCmZnVi7OJH+g3V30tLk3/Xr9/168VfRGTcTn7Y/1emXwtLmH/636b+p3d7/5+H+53b7/675rZ+q4VZht90yYcsxpPIDOzehGB8aaX3+oXr2mMs4s/6ve3+y0Wjrv6vb3fjuprsfheL/aL7xHfM+IyvlbfxszWd60w2+ibNuGY1XgCmZmNF2+IicvSb+wXZwzP7Pf9fnGZeX+/+ra/6veeft/ut1gURlBGiD7Z74J+f7NffP/6ndZmtj5rhdlG37QJx6zGE8jMbLFFJJYzjP+734WTj8si/OIy9B/0q1/vWO/ZfvHu67j0fVO/CMiH+/2nfvE6yNbfMbO1WyvMNvqmTThmNZ5AZmb14k0vH+13a/W1iMff6Td+p3UEY4TjYmcOy2sf4zJ1fPzdfl/qF39Wv+vazNZvrTDb6Js24ZjVeAKZmdWLwCuvcYzftRi/1Ds+P6dfOfsYt4lL03GJOi5Vj79HWbz2Md4QU37/YznjuK9fBKQzjmbrv1aYbfRNm3DMajyBzMzGi3dG//d+b+kXr3OMX6cTr08sf76n39/tF69/HK/8ou84C/nxfvEreOLz8rXyr8l8cvJ5+TMzW5+1wmyjb9qEY1bjCWRmZmazs1aYbfRNm3BMOnDyyUc9gczMzGw2duikk5phtpE3Nzc3qZjpEY5JL2zZctSTyMzMzGZje08/vRlnG3kRb9MmHFcg4tGZRzMzs9lZnGk80aIxzjSuRTQG4QgAQIpwBAAgRTgCAJAiHAEASBGOAACkCEcAAFKEIwAAKcIRAIAU4QgAQIpwBAAgRTgCAJAiHAEASBGOAACkCEcAAFKEIwAAKcIRAIAU4QgAQIpwBAAgRTgCAJAiHAEASBGOAACkCEcAAFKEIwAAKcIRAIAU4QgAQIpwBAAgRTgCAJAiHAEASBGOAACkCEcAAFKEIwAAKcIRAIAU4QgAQIpwBAAgRTgCAJAiHAEASBGOAACkCEcAAFKEIwAAKcIRAIAU4QgAQIpwBAAgRTgCAJAiHAEASBGOAACkCEcAAFKEIwAAKcIRAIAU4QgAQIpwBAAgRTgCAJAiHAEASBGOAACkCEcAAFKEIwAAKcIRAIAU4QgAQIpwBAAgRTgCAJAiHAEASBGOAACkCEcAAFKEIwAAKcIRAIAU4QgAQIpwBAAgRTgCAJAiHAEASBGOAACkCEcAAFKEIwAAKcIRAIAU4QgAQIpwBAAgRTgCAJAiHAEASBGOAACkCEcAAFKEIwAAKcIRAIAU4QgAQIpwBAAgRTgCAJAiHAEASBGOAACkCEcAAFKEIwAAKcIRAIAU4QgAQIpwBAAgRTgCAJAiHAEASBGOAACkCEcAAFKEIwAAKcIRAIAU4QgAQIpwBAAgRTgCAJAiHAEASBGOAACkCEcAAFKEIwAAKcIRAIAU4QgAQIpwBAAgRTgCAJAiHAEASBGOAACkCEcAAFKEIwAAKcIRAIAU4QgAQIpwBAAgRTgCAJAiHAEASBGOAACkCEcAAFKEIwAAKcIRAIAU4QgAQIpwBAAgRTgCAJAiHAEASBGOAACkCEcAAFKEIwAAKcIRAIAU4QgAQIpwBAAgRTgCAJAiHAEASBGOAACkCEcAAFKEIwAAKcIRAIAU4QgAQIpwBAAgRTgCAJAiHAEASBGOAACkCEcAAFKEIwAAKcIRAIAU4QgAQIpwBAAgRTgCAJAiHAEASBGOAACkCEcAAFKEIwAAKcIRAIAU4QgAQIpwBAAgRTgCAJAiHAEASBGOAACkCEcAAFKEIwAAKcIRAIAU4QgAQIpwBAAgRTgCAJAiHAEASBGOAACkCEcAAFKEIwAAKcIRAIAU4QgAQIpwBAAgRTgCAJAiHAEASBGOAACkCEcAAFKEIwAAKcIRAIAU4QgAQIpwBAAgRTgCAJAiHAEASBGOAACkCEcAAFKEIwAAKcIRAIAU4QgAQIpwBAAgRTgCAJAiHAEASBGOAACkCEcAAFKEIwAAKcIRAIAU4QgAQIpwBAAgRTgCAJAiHAEASBGOAACkCEcAAFKEIwAAKcIRAIAU4QgAQIpwBAAgRTgCAJAiHAEASBGOAACkCEcAAFKEIwAAKcIRAIAU4QgAQIpwBAAgRTgCAJAiHAEASBGOAACkCEcAAFKEIwAAKcIRAIAU4QgAQIpwBAAgRTgCAJAiHAEASBGOAACkCEcAAFKEIwAAKcIRAIAU4QgAQIpwBAAgRTgCAJAiHAEASBGOAACkCEcAAFKEIwAAKcIRAIAU4QgAQIpwBAAgRTgCAJAiHAEASBGOAACkCEcAAFKEIwAAKcIR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",o={description:"REFERENCE - Built-in Controls"},a="Progress Bar",i={unversionedId:"reference/controls/progressbar",id:"reference/controls/progressbar",title:"Progress Bar",description:"REFERENCE - Built-in Controls",source:"@site/docs/reference/controls/progressbar.md",sourceDirName:"reference/controls",slug:"/reference/controls/progressbar",permalink:"/avalonia-docs/docs/next/reference/controls/progressbar",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/reference/controls/progressbar.md",tags:[],version:"current",frontMatter:{description:"REFERENCE - Built-in Controls"},sidebar:"documentationSidebar",previous:{title:"Popup Controls",permalink:"/avalonia-docs/docs/next/reference/controls/popup-controls"},next:{title:"Refresh Container",permalink:"/avalonia-docs/docs/next/reference/controls/refreshcontainer"}},u={},s=[{value:"Useful Properties",id:"useful-properties",level:2},{value:"Example",id:"example",level:2},{value:"More Information",id:"more-information",level:2}],l={toc:s},m="wrapper";function p(A){let{components:e,...r}=A;return(0,n.kt)(m,(0,t.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"progress-bar"},"Progress Bar"),(0,n.kt)("p",null,"The progress bar presents a value as a proportionately filled bar, with the option to show a caption."),(0,n.kt)("h2",{id:"useful-properties"},"Useful Properties"),(0,n.kt)("p",null,"You will probably use these properties most often:"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",{width:"241"},"Property"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"Minimum")),(0,n.kt)("td",null,"Minimum value.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"Maximum")),(0,n.kt)("td",null,"Maximum value.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"Value")),(0,n.kt)("td",null,"Current value.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"Foreground")),(0,n.kt)("td",null,"The bar color.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"ShowProgressText")),(0,n.kt)("td",null,"Determines if the progress bar shows the value as a caption.")))),(0,n.kt)("admonition",{type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"The progress caption always shows the value with a percentage sign. This is only correct when the maximum to minimum range is 0 to 100.")),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<StackPanel Margin="20">\n  <ProgressBar  Margin="0 10" Height="20" \n                Minimum="0" Maximum="100" Value="14"\n                ShowProgressText="True"/>\n  <ProgressBar  Margin="0 10" Height="20"\n                Minimum="0" Maximum="100" Value="92"\n                Foreground="Red"\n                ShowProgressText="True"/>\n</StackPanel>\n')),(0,n.kt)("img",{src:c,alt:""}),(0,n.kt)("h2",{id:"more-information"},"More Information"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"For the complete API documentation about this control, see ",(0,n.kt)("a",{parentName:"p",href:"http://reference.avaloniaui.net/api/Avalonia.Controls/ProgressBar/"},"here"),".")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"View the source code on ",(0,n.kt)("em",{parentName:"p"},"GitHub")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/ProgressBar.cs"},(0,n.kt)("inlineCode",{parentName:"a"},"ProgressBar.cs")))))}p.isMDXComponent=!0}}]);
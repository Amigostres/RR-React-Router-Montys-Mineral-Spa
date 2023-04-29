

export default function Packages({ packages }) {
    const displayPackages = packages.map(eachPackageElement => <li>{eachPackageElement}</li>)
    return (
        <div>
            <div className="packages">
                <div className="packagesHeader">
                    <h1>Our Packages</h1>
                        <ul>
                            {displayPackages}
                        </ul>
                </div>
                
            </div>
        </div>
    )
}
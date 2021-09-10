import React, { useState } from 'react';
import './index.scss'

function FileUpload() {
    const [image, setImage] = useState("withoutpreview");
    const [previewimage, setPreviewImage] = useState(useState({ preview: "", raw: "" }));

    const handleFileChange = (e) => {
        setImage({
            withoutpreview: e.target.files[0].name,
        })
    }

    const handleFileChangepreview = (e) => {
        if (e.target.files.length) {
            setPreviewImage({
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0]
            })
        }
    }

    return (
        <div className="fileUploadSec">
            <div className="jumbotron text-center">
                <h1>File Uplaod</h1>
                <p>Enhance your skills in React and React Native !</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 offset-lg-4 col-12">
                        <h3>without preview</h3>
                        <p className="text-center mt-3">{image.withoutpreview}</p>
                        <div className="fileUpload">
                            <div className="innerFileSection">
                                <img src="data:image/png;base64,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"
                                    alt="img" width="20" />
                                <span>Tap to upload</span>
                                <input type="file"
                                    id="upload-button"
                                    className="inputUpload"
                                    onChange={handleFileChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-4 col-12 mt-3">
                        <h3>with preview</h3>
                        {/* {previewimage.preview ? (
                            <img src={previewimage.preview} alt="dummy" width="300" height="300" />
                        ) : (
                            <>
                                <div className="fileUpload">
                                    <div className="innerFileSection">
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAADc3NygoKClpaXX19f4+PiZmZnl5eWGhobOzs7x8fHAwMCsrKxra2soKChISEjLy8t4eHg7OzuysrJPT09aWlro6OhBQUGMjIwQEBCSkpLBwcFDQ0NkZGQ2NjYgICBzc3MwMDB/f39VVVUYGBgjIyNMAcsjAAAIdUlEQVR4nO2d52LyOgyGWzYhUKAUWqBsev+XeBiljLyyLUd2wvn0/GzBthIPSZbEy4uiKIqiKIqiKIqiKIqiKIqiKMo/QKee1r6GvY/P5WazfO8v1u3qKJkUPSohKqPt9yvBZl1LGkUPMBf15o4S7sp7e1D0OD1Je3bpLnx0O0UPl8t84S7emc/uE83XVpsr3plFUvTI3Rh8+Ml3ZNUtevR20jd/+U40i5bATLrPKV/JZUw2AvIdKelc7YyF5DvwU8Y9pykn35Fe2c6OSt4NJsuoaJnumInLd2BcntfYeQ8h4IGyrMZ5IPkOfBUt24mvcAIeVPKipTvgYB/lomg7ufHDHPB+NWV+o9jFOHEc5arXTOuT697Yqcyrw6Xjl9MCBay4DPB7Rnoq6jUnPagWVai7AdoHt0hth1qytbdSlC5uFbDvqJYMrP6OalhJCGxTdNtyb6tRtTRWxES1bDIzrso1Mu+x8bXUhnE8bR+VcmRsMrrL0WTsjn1dg0b1iDHpJTDt8jme9qRvaDeqqWEwd4f5Wu7SLX/LjN2JAT2Med62J/T8b0uM3Ql6l3mXcM7TKkDux+cKuVjWMu3Tm2qk2w3ydBY7lkltqS/VgxHyqBe0Acg+onhSKaNH1I7rUM7zCPO0FkPAw25GiLiT7Qb1TAgorlRRHQXfTwlDJ4Ad3iFElO/pDsJkCmKixuzrCg6rEDoHH0mxiEH1U6yuLUN1h2/Lt6G6O4JPinA7+Gfk/ohXGNDbh3ebgC8RPtJeuP6opRhsJWJ1MVRvZ6CpPQvVG4wCCuyRxvM0ZmfBL4egJRPosULXRXj/EFRQd72v7kB8T0UOzZxeGRdMF7C7pqTCn6Au2I+xUWd3bLmjGovFNQ5B6/yTaczfJQx+r19cL0gsiLzC7uvrgt2zSyQL55aEAE1S9mHfOn6L/cDN7v4LY/78v6UBlWB2m6vT19hX804SHvadCrfhKzgi6I3bzPr8vR/u95zDPXqem86AuPjieg//lEzuGdNyldDPo9kgQ7aZD+xGJ+LqJK5BDQeW7C0HHoMnuArb7TCZD4dy8EGYr9EQlM70zt619M77rmtUyxmOx7FhisnjbYkP5zYzYo0XfTx1nqnGFb5iDTHj/uQplNzwTkf3rVld4mls2RQFlqHuFJt0i9MSIpx5F1jOZ2B58TYqbjScSwiORUDWO4D+D1YYED8Nx+rqsCmDrN0QN8FRsuhDi8TyBK0mC8cbROgMU0YT14fU3304hs0b16J1ZfcZqgMZX8ExpNrjbTWt/51QrXRmz68y7KjUvc+FIUc1Mpw5OS3XgS2ukR6m8YCdVnke2ZWhrdwxznPjmyTXAXJYXNhwryjXpiGwDaksLVPsJqHAGc6JPdtTaTl0JJx1LUOsGFTDDYuQfztpW9Eyzl3DY0RLkZzZG49VY7fsZHyBpBELLjfJo94nrMxBFWEaUhTkkZSZp2TQms90srs6X8VSf8gj/HHnp44YHz+WOZD4DyHPfIfQzh98npQ17XVwmeJhbxG68aQSeO5fDrFivQR0TiuVuqJr4Ld4dygSk9nL1eqQcHJBKp+COJtuPddYP/AL6XIX0PMRAvAbGl8/gJ+B37U5rzKGkITEWXc99uHx5bdKDCHpCP6NFAF8sFefEuzcS+lgOOLPiCXFwNYv/4TqnV9YLldAuYgAKMTl+aHgFT+lKqnW7gC3R73u/UfEXiLSq38DxOE+k+/e8QLY44KFbMMFcl5qaB8aW5pzBJyN4RLu0GbTJf8j8wrjSohe4vlNgX98CnUaVUKYQU+MQiy8Kq6EKMjoaMAgRVmqz7gSotl4dMCAZSgW1BVZQmDkHg0MILhYckNkCZFvAZ+GYsG4kSVEb6uDbnfkUsViSwj0mgSd93LlYWJLCG7FR+iPcqG4sSUE6ncTXVbIBQDHlhCoNUNkWMj1GFtCsNWMketPrsMSSNgHcaqC+UzRJczegL6BeA7BvOLoEmZn5B68V8GM1OgSZs2L6f9ewlcwSwXzYaJLmFVqpiCgQMr8fSlAwmya3Qrc1rIiesxElzA7I5dw5opRgvNwhy5l5FKnYksITMEeurMQcrS9xJcQ9NdG0eJyTtvYEoJ7oRoyOOTy7GNLuM72lyLHu9xmGltCcN1dgb4NseKhkSVE8RYvMAkuZNWgkBKCPeWYpAWMfLECYpElBOU7jq5fdPUkNU3jSogm6Yj4u1Ruf1wJUf7J6V2hYF6hPuNKCORYnf6BIjGEDv2oEqIwkHNgJcxpkOk0qoRIjIT+l0xAFpAwWOVcWGfi938wYKg89fvdgCGfl+hfGBUmFq0UCRgU9Rc3B6Oyo1WcFAGW0bh6fnHc2zPNUxyWfBONBP8vFGseBZzWe/MBXLkzUD22AKzh+O+2bfiJcIWZhCHShe8+Q5RfLa54Pwcibf/h5MUfKqiyPQ+qOO7Dx6gUoniFmH2h8nMyd/XUb2oKRSkGgyqinrXiyQoN+8h131m0yN+0A0Y8nQhS3l+1Y44ZV5w8spHzgktSp7N68f2ZKStyUb6p2jJldhBXL8Zf4VqU6z3WjZkrpNVgLsy0qZXlt207NXNZF0PYmu1Xij5Fy/n5kTTpDeOM8YBzqMz01puN5km9Ept6Mh/Neg6VI8zxQFRN9Cdib7FrHTNcS4zVcKfSap+EqcNu2DAVtCg7KzfXi2umcvlwDslbFz1STxhuF1axu9LA8khUnm+/mXLTpq0/3VcyPGrEOxW3KA1+mfX8YmlF4e1Nmgj+bnpAxnnCDir22mFF85G3MEOl3FtOT6LwRKdZ1qNj2hSzyV1+2zY6W2FrvN4sk7rab4ZxG9W7W5sHITyf225gp1ijlaSjbq0am1p3lCatZ7qYVhRFURRFURRFURRFURRFURRFURRFURTl3+M/opxmrT/yguYAAAAASUVORK5CYII="
                                            alt="img" width="20" />
                                        <span>Tap to upload</span>
                                        <input type="file"
                                            id="upload-button"
                                            className="inputUpload"
                                            onChange={handleFileChangepreview}
                                        />
                                    </div>
                                </div>
                            </>
                        )} */}
                        <img src={previewimage.preview} width="200" height="150" />
                        <div className="fileUpload">
                            <div className="innerFileSection">
                                <img src="data:image/png;base64,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"
                                    alt="img" width="20" />
                                <span>Tap to upload</span>
                                <input type="file"
                                    id="upload-button"
                                    className="inputUpload"
                                    onChange={handleFileChangepreview}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default FileUpload;
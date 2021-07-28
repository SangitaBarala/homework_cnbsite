import React, {useState} from 'react'
import {Link, Redirect, Route, Switch} from 'react-router-dom'
import './Grids.css'
import { GridList } from "./GridList";
import ReactPaginate from 'react-paginate'


const GridShow = () => {

    const [replace, setReplace] = useState(false)
    const [infoGrid, setInfoGrid] = useState(GridList.slice(0, 10))
    const [pageNumber, setPageNumber] = useState(0)
    const gridPerPage = 1;
    const pageVisited = pageNumber * gridPerPage;


    const displayGrid = infoGrid.slice(pageVisited, pageVisited + gridPerPage).map((curElem)=>{
        return(
            <section className="main-card--container">
                {GridList.map((curElem) => {
                    const { id, title, company,path, description } = curElem;
                    return (
                        <>
                            <div className="card-container" key={id}>
                                <div className="card ">
                                    <div className="card-body">
                                        <span className="card-number card-circle subtle">{id}</span>
                                        <span className="card-author subtle"> {company}</span>
                                        <h2 className="card-title"> {title} </h2>
                                        <span className="card-description subtle">{description}</span>
                                        <div className="card-read"></div>
                                    </div>
                                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIVFBgVEhQZGRgaGBgYGhwaGBkcHBoYGhgZGhoaGBkcIS4nHB4rIRoYJjgmLDAxNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzQrJCU0Pzg2NjQxNDExMTE0NDE0MT00MTQ0NTQ0NjQxNDQ0NDU0NDQ1PzExNDQ0NDQ0NDQ0Mf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xAA+EAACAQIEAggDBgUEAgMBAAABAhEAAwQSITEFUQYTIkFhcYGRMqGxBxRCUnLBIzNi0eGCkqLwssIWRPEV/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAoEQACAwACAQMDBAMAAAAAAAAAAQIDESExEgRBURNhkQVxofAigdH/2gAMAwEAAhEDEQA/ANfp/wAM6q+LyjsXdG8HA/cf+NcHhn6nEFPwXNV8G7xXunSXhgxGHe3+KJQ8nGqn3rxDiGFLrB7Lo3qrKYI96gNDEtpXKcVv6xVzE4rEKIYq3yrn8Szk6x70SBBdeq5qR0blTrNqTrpW4rXhGQEU0iproANRGjWAbRS0lQBSUtFQCUtEUsUKJRSxRFAJRS0UAlLRRVIFFFFAFFFAoApaKKAKWkpRQAKcDTaUUB0PAMYyOjp8SMrr+pGDD9/avpnC4hbiLcQyrqrr5MAR9a+U+G3crfP2/wAT719C/Ztj+swSqTLWmZP9PxJ6Q0f6aMp1tFFFZKApaQUtUgtFFFAFeTfaBwzqMR1qjsXdfK4N/ca+hr1g1idJbGFvWHt33AWJzSJUjZgeYqMHz7xXFDurBuXJq7xnDMtxwrB0DEK40zDnFR8NtLM3FmCNDsfOqCiHp4unnXVE8Of48MUPNH/bSoX4NgH/AJeIdPB1ke4H71rSYcybnMCm5l5fOnXrYDEKwYAkAjv8aYUPKoAhefypcnIimRRQDjbblSEGkBNOFxudAXsNwm69sXEAYFygAMtmC5jI5RTHwdxFVriMqvJQkQGgwcvOux+zi8zdcumVQG27zIP0rA6UcUe66IylUtKURZGgnU+sCvNG2TtcM69z2TpjGlWJ8v2MRgO6kCU9Qv5vcVq8Q4dcshOttFMwzLMdocx716DyPkx8lJlq0yz3RTbaiaAg6ukK1qi0uWTWfd3qkISKSnURQDKUU6KIoBKSnRRFAJS0RSxQCClFEURQE1h4YGvXfsk4jlvNaJ0uJp+u3qPdCx9K8dFdb0O4l1N63cn4HVj+kGHHqpihT6OmgPTQQdRsdR5UVkpIHp01GtOoB80tR0tCHEYjj6kw96PDaua6W8TXqSLbAyO4zWfxN8MyhBfdidgO/wDUWFc1xK26A9lVA2g93jGlVGmc3cYye1WpxXBW7PV9Vikvl1lgix1Z00Op/Y6VVN6SVIDN5SKYuQNqkeM6TWk1jWGB0OPw0jXDtBrTtX1yFjsDE6UoKNtGu2lQHNJhzOpip/uj/hIPkat4m2Qx7J+tVzHfQaQNauDdD7T9KjLDvFXlcjZj70/r274PmBQGd2aMg7jWgerPxWx/pJFRth7R2Lr5gEfKgO1+zjDFbGJuAiRlAEiTCk6Dv3rm+jvR3E8QxDJaAnV3ZjARS2/ieQre6M2UTD5wymBecEgDXLlEEmQda1fsZvPaxL22STcTNnzCAqTpz1LVhVqMnJds6SscoqL6RBhvs2OHvFsY6OiyUtI38S9A5aR3VV6bJbIt2DlQ27ReCe0hc5sh9ABXZJiU/wD714FQrizbRCdZmCxHIwyiPCvP/tT4etniLiSwdEuSd5MqR/xrK1y+yI2vHozejfBhiFZmZlh1QFRO4LNPpWQ92GIBkAkDyBrt+jmAe3h7blGCs1y5nKEr/LKrDjRTXBC3I0YGupgeb3gKbmXkR5H+9J1LcvamlSNxQDsq/m9x/al6vkQfX+9MooBxtNyP1+lNIoBI2p4utz99aAZRUnWc1B9I+lGZPykeR/vQEdKBUmVe5vcf2pRb5EH1/vQDIpQtONtuR/75Uk0A0itDhF2Hg8/lsfkflVE1JhnhgaA+luhuO67B2mJ7Srkbzt9nXzAB9a3K85+yjiMi5ZJ3C3B5jsXP/SvRqyzQq06mrTqAKdTRTqA8JvYQJ28Vadv6iylfGF0iuS4xibbsepRlWfxH6Cty/hMS5Z3GcbxcYufTLoKyuKYp0ARkQHukhoBHcO40RWZuRQgi5A75GubwjWocMjOSNWUS0Fo0796dZRc0XO/aZEHnAGtM63IwNskkTrAHtVMk11wqpKRrIB2IPj30/B3GDA54mRA7h5mo1wLsAcwJILfFsPWmi+TAVAxClTImBzAG3nQgputmIQl2aZgHQ+FIuJckCZ3EEA7VDh9GMk7GIMa+NRM+gGvM+dAaNu5aaZAHLQgn2pqLbbYsNYjQ0y2chUqV1kyp7o1BaokuZ4BMKs/CozRzJ7/WroLd3CFSBnWTsDpUbYa5+WfIg1EGUQxYnUgARmj8Jnb2qWzduZCCQFYxGmbN3Hn600GnaxTrZCZAAEcSV1liDM1Z6EY25h8R1lpVZjbdIMx2oM6eQrJt4lkXKzQc0EZpbTw2ir+BxjK6tbXL3E5QWnkBpTRhvDjLtxi1fujKM6BkXUfBlB18SD6V03Tno1974lZRriKblhiMyElerImCGEzn/wCJrhr2JTruscwVg6grMf0xU3EOONfupeDMCq5BmkmDy76mIunrnHcHYw/CnsIrFEw5CwJOi6NPOda+dxhLZ+G6R+pD9RXoXFsXcbD5DeuGUC5XZgPIDYiuCuWWXdGHoY96uE0YOHXPwMjfpcT7GKa9i+nxI/tI9xSaHlUqXXX4XYeTGrgKhvc1HtFEoe4jyNXzjLh+Ihv1Kp/amFrZ+K0v+klflUBUyL3N7ijqT3EH1qycPaOxdfZh+xpv3Ifhup/qlPqKArG2w7jTYq59yvjZcw5qwb6GonZ1+NSP1LH1oCEUtSK6n8I9K38JgMFly3ReD/mRk/8ABhVBzoJGxp4utznz1+tdC/AMK38vGZfC7aYf8kJHyqF+imIP8t7N39F1Z/2vlqAxC8/hHppSCpcXhblpylxCjjdTuJ1G1RqpO1UHd/Z7xPqsRaYnTMEb9L9g+xg17zXzBwO7D5eenv8A5ivo7o9j+vw1u5OpQBv1r2W+YNZZUaS06kWlqFAU6kFLQHzTecQercgH8rEfQ1i3lj/O/vXS4m/gbv8A9dUbnbYp/wAT2ax8TgR+BiR/UP3FVBlG9jXOkxK5W7yR5n9qZh2QKwIliJVsx0PLLtT3wx5e1WOD8JOIvpazZFJJdyNERQWdz5Kp9YoQhHErgUKFUaRMe9Jl6sqysCCuaRmUHmusTXqPSCxgsJgk6rBpdRWV1W6zH+ZotwndpHdt4CvKuI4y5euNdukFmMnsgDYCFA2AAA9KzGXl0bnBx4ZGqM+i5jEmApMDc7UjECIGxggEyfOdqfg72VwRp9PWdKY+8O2xOxBA8iK0cwtrJCuSqiTOUt6QKcyqkGQTMMoJ2H5u4g+dS2ntqqswzEEgrmKgg7EsDMjyqATMsNCddM0D96AfeLvlzEwZCCBtOyga1KXVUysvbVhI7SkjvBk6H0pGORCM65mIlBOYAahiwkA+EzWr0bwfD3l8fiLiKCBlRGMz3s8HTyE0Bl4RTnzMSoJmQJI5RWhfvG3mYXVzkgCRLxoQ0iQPeu04rwvo+lvOmJdWgQqMWduXYddPPQV5665nJWSNlzZQYns5u4GN6hreCUX83buBm2lmPPkDUmOxKaZEILKDLSI8ViNDVb70yvJhm1U6BvDQmRSBLj9u4HeN9SYA7uYq4QtW0d8ud5IByy0BT45tKbbW8+ZreZ8iZnySMgmNe5qqu9vLmHxAgBRouXxO5PjXpnALuFXDkWFTKyjMXHaY5czLcYjUyDtIivP6i/6MU0m9PR6ehXSxvMPOsPcdtbi5xrIyoWn6ikxb2h8NthzklT6AzU3FcKjYi593Aa0rDtTCrI1Ob8szB5Cs5wJKFyQDuGzJ5jnXeL2KfycJx8ZNfBYt2lYaPl8Gy/UEU1resZ0J/VH10+dVltHnHInQHy5122H6I28Rh7V+xczNki4Gba4oAKgZYA9TpFZstjWtlwi11Sm8j2cqcLcAko0cwMw91moS4mPka1sJ9564YWypZ8xUKFUHMAS0GY0AJmdhUeLOIsvkxWdCe1kdFY5SSJhvIx5VpWRbzVubm858mHGS7Rm5wNfpThj7g2dvUz8jWlfuYVklUBI3EFNO8ypj0iosNgbV09hXUxOrIy/PKa2CoMZJGZLZ8cgB9xFaC3VNQX+DlCP4qDkHDIfoR860MLh7kfArj+ghp/2GhNIQw50sUpRQYZSD7Ujon4T/AI/vU0vJl8Qwzh8xIObXefQz31VRmUzlqbEyryCZmZmpUxlwmCQ/IMisfmJqgZhb5zg7V9F9BcDctYUC4ILsXCndVYCAeW0+teO8F4HeJS5ct27YVldTDByVIIyrmgagd1e/YJ2a2hb4iik+ZAmssqLApaSlFQo6iiigPmTE4de6qDZl2JrRvPVX7tceSq9kbsYVR5u0Ae9VFZAMW3fB8wPrW5w50+5Yq4ujkpbYD8hdG7M6gsZnwQ1h3UtpJZy5Hcmi/wC9hr6D1rS6TcMfCuMOG+K1auuoBEOQ/ZJOpyywBnv9BGtEXj/JucZYvwy1dy5lzIhP6MyfUVwty5MQIjWthSwwsB23IyzpBMkRWGa5UVqCaXy3+Tt6iTk038It4ZM8glAR+Y5Z8jTrvDHEsyHLvKkMoHjE1nk0ocjYkT413PMWEkAhHEHeQP8ANWOD8Ju4nEJh7Q7buFkahRuznwVQT6VmVr9Gcbi7N/Pg3yPlIZyEKpbJBZnLgqq6DU+XfFAX+mvAPuWKKBj1bIty0zgkshgZSQPiVsw8gOdYVjFNm0EkgrsGOvLMDHpXT9OOkuIxDKj9W9pTcOHuqkM9puzlJmNIWRAIKj15RHWIZJ8RoaFHkFm7bOXPMEn076mDEdllRsvZjVGEHUEiDM85pfvKsAMxAAjVQdOZ51Aozz8AM8oJ/aoBBnUyB3z/ANNK98sZYSecmalXDuFYw+kQQRlGonN37TtUVu4zGIzeGWT8taoE7J5j5123R+8i28La6xIf7yz6jskgqublpzrjLyAQxKQ34VbtLp+IRp/mtTBYhVSFTWCC3eQd5/xFcL6/qLD0enn4S1GaLbDMrkQOyfxHeCUA325ioA4VuyMwB0JEE+ayR6a1awfDrt24LdhGdyTCr3+PgPEwK7FPsy4kyhn6oMAYU3NY3gwsTM/irtp52cU+a4pKqTkEmAYC95PcBXddAHZLLhj2S4KidSzKBlynbSG9q5bifC3w2XrrZQtJUgghgDGZTJDcwdtjV7hmPu4e0UCFZcXszEFvCV7tFG+u9ef1dbsrcV74en0k1CzWXOiWLa1ibmJclLXWKmUESzXbmiBiJhQGZoI0WNjWT0hW5dxOJa4Vzi7cBcyM+RioVAAdYUaaVAt1GJXKIzF2Ysc2bUtpIUDyHdVbG413uNcLFixmSBJ9YqV1KNvn7tZ/o4zlvH3KyFZBBII12B1FDKQQA0kidDHvyphuAkkgwZICkCD3TIMimhOeg8a9RzJ3uORDAmNu/XTc8quYPibopXImUmTK9/nvWetzL8Mzz/xT0LM3ezE+ZnwFAaF3H3HPxtlOsHYHwXuq3jsFctC3nKnrEzqFbMY0+IDYwQfWm8K4QHJ626LYH9Jck8tNvnXd8RxCWcPZVVkIFRGIlgoQye1t/wDlcLLfGcY/J6K6fKEpfBx2B6K3bpz3T1aePxHyWukwGCw2HA6pRJKr1jgvBZsoJgaCTXK9JOOm4FW27fiLwdDtlGYb9+1b/D7ZSwiZsulttgYZGDmAeZAB8q7PTii5grV3EXkTV3LASSQBrqQB8OgOup8a9ow9sqiqTJVQCdpIETFcr0U4YLadYwAZtQIiAe8+JrprL5tQ0jwM1ClilqnjOI2bIHW3FSdsxgnyG5q1acMAwMggEHmDqDQhJRSTSzQh80vftr8CSfzPr7J8I9c1UMZiHcy7Fo2nYeQ2A8q1cTwTELqEDDmpB+tZGJsOnxqy+YIoaZDhriLcRrilkDqXURLIGBZROkkSPWuk6XcQu4p0xLoqh7QLKpDG2Gdygc7jMhRgSADm0rlWWdK0saziXJOdwQ7DSQdxpssQI2gAbVSLhj1cdWRWLcXWryPpFU7u9ZisNzlqRCRSGnxTSK2cxlaHCVBfKdjuO4+Y76okVYwT5XBoQ1OkGCVACp0mY7gSACY9B7VgxW3xW/nUVixRgscPwb3rqWrcZ7jqiyYGZyFEnuGtT8W4dcw197FwqXtsVYqSVJgHskgEjXlXYfZSLAvXHulFZerCM+UZQesLFC2zaLttvsKr/aVh7BvpiMPGW5nV8uoLpBD5tcxZXB/0z31XFpJ/JFLW450cbJiJpbble4HzFJSGoUsPig8ZwxjbtHTyBqzZvqFjUeY/tWcvjVhDppHv+xisSWnSDa6YzEJLCCCTqMp8/Y6VucO6Q8SspltYplU6ZHdSR3COuBAH6TWBcUzy8xFImIcbMa0ujMuWWLvEr7OXuMzPsWZiWOuxcHUeG1WUxDskKANd8q689QJJnnWet+WLOoafT2jar2HxFuNVYDwYfUisyWo1W0mRLaAJOdGju7QPsyifSorrkHRoH/e6mO5nl9aQIWMKCTyGpolzpJA14RGUT+aBPyqNEZjABJ5DU1ZXDIv8xpP5Ug+77D0mla45BVAEWJIGmnN2J19T6VsyN6hE/mNr+VYJ9W2X5mtXgGDuYm6ltFNu0zhHuBWKrOsM8HtHYAwJI2FdDwj7P+twZa6wt3mysk5iFRtFVlBglt57pFY/RS1cw3EbSMSrLf6p1BIBOYoQfzCTNee27a5uvtJ/38nX6bi030yhjrD2MTcsq4uhCVlZAaNzG4IMg7wQa2umd9XZEtMGyoQ4BOUSFyidj31V6YYaMdiefWsdP6gD+9Uk10I1HsfEVmtfUULG+UvzppTcYSivdr+CDhXDWe6gcqFBBlmCgwdASdIr0d0s4NUu3j1zuSES2QVBAmWPLUax37VwgtgbkVfwPDmJzAZQdSx0nSNBGojvr0tHA2OK9IcXiAQX6tPyJMR4ndj56eFGARreqsyyNwzAg+GtR4a2iaKCe/M37A7VZsJcuNktoXbkO7xJ7vWpoLeHt3L9xUzM7MwWWYsdTEkmvY7agAAbAADyGlcX0T4G1pusuEF4IAHwrO5nvMaeprsVahSaiminVSHgyo6/A3s0f2p33u6vxajbtKD8xFdpjehdvdA6eRzL7Gsa/wBF8Qv8t1ccjKn+1QuHOXLeGf8AmWFB5oYP7fWosTwqxcELdZD/AFDQev8AmtTE8Pvp/MsNHMCR7rVH+Ge8g/8Ae6poxmVd6M3wJtsjjwMH2OnzrIxXDb6fHaceOWR7rIrrVtGZVtfDQ06zxFtQtwNBgiVbUc++rpNOCIpIrvr922/82wj+MCfSZ+tZ9/hWCb4c9s+BkfPN+1XQcgRTkMGtfE8HtgwmIU8s6sv/ACTMPeKgPBr8MypnVYJa2yvuQBopzbkd1UFW88iqpqxeRlJVwVYaFWBVgeRU6g1FFAaXBcQ6F8m/Z05zI99RVrH8TJcWcTN22hgQQLlvsgMLb9+y9lgy6RpvWXgbzo2ZN/Hbw9jrTFWXLN3mTXSyUZUqLXKfZzjFqxv5Ox49iuE3bSLZPVvbAUfwD/EXLqCUkZswBzH8zc65S5ikKr22bLICsCQqwNp09KuYt0VOwoBNZLGvF6aHhHE21vu9PRY9f/AuXAdQsazy9gKAaYBTxXoZhMY1MIqRqdZsO5yopY+FEGRAVYsIzaKCT4fvyrSXg4TW8dd8g39e/wClLdGmUQianw8Nu8/9NGVcFFraJq5zH8qnT1f+3vVe9jSRlWFX8q6D1729an4kU7ISdgGMRJBJkT5j2qbhFu29xLbArndUBCgmWYATPdrUbSWk5bwzrLNMgj5d+mtdRwo21TN95RDHwrhw7g+JZR8mjxrf6ZcPyiyidWEVW6uew0SAUEyDGhzSJzbaEtzNzh15dWttEDVVzLp/UmlYhNWQUl7mpx8JNP2O64X0pw1xWN661oyoCi07jKiKqlWVYk5SY3knurlzbxL4y7j8NazWUvlyWyDLlgyyFgZiCY586pYe5lGlWsM9xldLY7DkFidFkba7nyHKsRohFt52uTpZbKUUm+i7xrJiE+93LiC675GRUgGGbKWMzIQKJ8APGsrCYFmMoNPzHQeg7zWlZwKr8XbPj8IPgv8AerXWaxudgB9AK6RiopJLEjlrZFhsDbTU9tubbDyFTs2Y5RJJ0AUSdeQrZ4Z0YxF6Dc/hpy/GR5fh9fau24T0fs2B2E17ydWPma0Q4/hPRO7c7V2UX8o+I/qPdXb8N4PbtLlRAB4d/mdzWmln0qdUAoNIktVOoilFFCC06m0VQMK1E9hW+JQfSpqKgKD8NQ7SP++NZWP6N23+JEfzWD7/AOa6SKCKA86xfQm3uge35HMvsZ+teV9K+Dfd8SUbQGSrQRJIGWTOgj55q+ljXm/TPox97LMjZXBYGZgjMe/uMT4dquF18aWvLp+51rrdm52jx2xfdHBJJKmNST6a91dhw/CfeUL24JXdQ3a9FOp7/apk+zy8wAe8ikaSAzEjukELrW3wToWmHZWGIdmG+UKqkd4KnNp614r/ANUojF+Euf2bO0PSy8v8lx+5xeK4ex1Vh66VtdFMHcVR/MBuYqyhNt1UqlsS5Yalk/ipmAjRRrz6/iPRyzdOeHVvxMgkE83AG/jUeH4EyZFRkcW1uOCysr52DlWWDHdbGs/DNez0t6urViWacrIuEnHejgV4rcdmNwB1dmfK4DDtsWIhpA3qRsLgn+O0UPNCQP8AaDH/ABrWxPAsQnx2iRzEMPloKotYC/EpU+o+td9ObKX/AMcsnW1iPR1E+4g/8aqX+BXl0XI5/odZ/wBrQx9BWqcKGHZb3qhicHcHdPkf23+Va8uMMmLjbNxNLiMn61K+0iqkVu2cZftmA7qPykmPVTp8q1sHjMK4/jYS2x/MEVSfMplqLEGzjCKkw2GuO2W2pY+AruLz8OI7GDUHzb/2dqWzf7OW2q215Jv6tuaoMbC9GlQZsS8RrkUyfU7CtBcUqLlw6BF/MNz5Hdv9OnjTjhZYs50nszrGg7jpMzrE61KpUHsiSfUmppTNxGFuONDB1mezMgg7TGhPOrmD4V1jIgAe4zBVnXtMQPbmfCa3MD0ZxF0gsOrX+r4vRd/eK7DgPR23h2DpOcSA7gEiRByrsNJHrQuHDdOvs8vW7ltsM2ayUAYsfguqAG078w1HKGGmlVuAdGzYu27lxC2VwxmAD3bDbefSvY7eJZgVZs2pGy6wd9BTL+CDKewGMHQgSTGkE7GszWxaLB5JM826a4P7wMtpcptsCMxOzIcxDDYSqiuNwnDcTaYsuZDOjIx19AQa9dscIvuyM1ooMxzhykhQxiQrMCcpGo3ImBtVzHdHbPZkhZYKJyjU7AbSfDepXWqq4pfHP2YlY7bJauni+6PHXe7cuILvaOxJn4QZIYHfc78q07l4DQeQA+gFdEeiV+7fcgG0gJRA4lmQfE6gaCTEAkGI31rp+DdG7FhiAssFBLsVJMzMGZXunsqNRqa1o8XhxvCujOJvwXHVp4jtkeC/h9Y8q7ng/RqxYEqst3sdWPr3eQitHhF5LikoykB2HZYsBJkakCNCNI02kxNaSrFVcrSSTi2vchSzHhUyoBTqWhkKKKKAKWiigFp1Np1UDKKKWoUSkp1FAYnEjjQzdUbIt5rYWUuO8Myq7MAyrAlm07h3b1XxWAvAl3uFzEQqKo9tSfU10cUVytqjbFxktTNwm4PUcJiL11Zy2GMA7+WmgGusaTWFwbF4q9eIUlxrmDfhInu/D3bQNTppXq8CkCgbACvLV+nUQi0op78naXqpNp9Z/Jj8Pw1xV7SxOv8Ajxp7YYmM6DU7xrrJitaivXXXGuKjFYkcJTc5eTOb409rDWzcfQKJOpIjYe5ryXjPSe+5uXSVto7Rati1bcNlChmZ2BZfQjWQJivWsdg72IDpibSdWS+TKWzBARkzFSZYkTGgEjvGuBieieDYa4ZlMaw7HXwDk1vTK5PJ7fGbzMAqISSIVVYFjyEHc16bj+hjoFNu58SzlfdSdSuYbxMTRw3o7hsPeF23bbOoJTNlInmAFGvKa6nhXF0vEK7CWnIhAkwMzRz0PpFc3JeSii6lw+zz29wHFLM28w8IYeg7qzLuEC/FaynwBH0r2o4FD3R5GoLvB0bfXwYA11JweJO9kHUgHkWqxhs79m0hY/0gn6V62ejGHmTaSfKrtjhNtNAsDkBAoODznhvRK88G82QflXVv7D512XCujlqyOwgB5nVv9x29K37dgDYVILdMGlW3ZC7CpupnfapwtLFCES2VGyj2qSKWigEqti8KbmWLjpBnslRm8GlTI8KtUUa0qePUVrmCRnVyWldgGYL37qDB3NCYK0LhuLbUOdCwVcx23aJOw9hVmipiL5vOwoooqmQooooAopaKASlooigAUtEUVQJS0UVAFFFFAFFFFAFFFFCiUUUUAUhQHcUUUIV8Vw6zdXLdto6zMMoInnBpxwlvTsJ2SCOyNCNiORFFFATRRFFFAEURRRQBFEUUUARRRRQBRRRQBRRRQBRRRQBRRRQC0UUUAUtFFAFOooqgKKKKA//Z" alt="images" className="card-media" />

                                  <Link to="/Shopify"><span className="card-tag  subtle">More Info..</span></Link>
                                </div>
                            </div>
                            {/*<Switch>*/}
                            {/*    <Route path="/Shopify" component={Shopify} />*/}
                            {/*</Switch>*/}
                        </>
                    );
                })}

            </section>

        )
    })

    const pageCount = Math.ceil(infoGrid.length/gridPerPage)

    // @ts-ignore
    const changePage = ({selected}) => {
        setPageNumber(selected)
    }

    return (
        <div className='container-lg'>
            {displayGrid}
            <div className="reactPaginateClass">
                <ReactPaginate pageCount={pageCount} pageRangeDisplayed={0-3} marginPagesDisplayed={3}
                               previousLabel = {"Previous"}
                               nextLabel = {"Next"}
                               onPageChange = {changePage}
                               containerClassName={"paginationBtns"}
                               previousLinkClassName={"previousBtn"}
                               nextLinkClassName={"nextBtn"}
                               disabledClassName={"paginationDisabled"}
                               activeClassName={"paginationActive"}/>
            </div>
        </div>
    )
}
export default GridShow
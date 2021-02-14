import React from 'react'
import './styles.scss';
import { isMobile } from '../../../helpers/Mobile';

import Icon from "../Icon";
import Dropdown from '../Dropdown';

const BaseHeader =  ({username}) => {

return <div className="base-header-container">
   {isMobile &&
   <div className="base-header-title">
        <svg width="101" height="32" viewBox="0 0 101 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.3185 25.3022H6.11084V0.355591H0.00012207V31.0187H22.3185V25.3022Z" fill="#3843D0" />
            <path d="M44.0533 9.79545H38.3587V21.4693C38.3587 24.8642 36.4751 26.244 34.0221 26.244C31.5471 26.244 29.6855 24.8642 29.6855 21.4693V9.79545H23.969V21.9731C23.969 28.6752 28.6999 31.5663 34.0221 31.5663C39.3224 31.5663 44.0533 28.6752 44.0533 21.9731V9.79545Z" fill="#3843D0" />
            <path d="M57.9875 9.22599C51.2197 9.22599 46.686 13.9788 46.686 20.3961C46.686 26.8354 51.2197 31.5663 57.9875 31.5663C61.5357 31.5663 64.5144 30.1426 66.5075 27.58L62.4337 24.0976C61.2291 25.4117 59.6521 26.244 57.8123 26.244C54.8555 26.244 52.512 23.9443 52.512 20.3961C52.512 16.8699 54.8774 14.5482 57.8342 14.5482C59.6959 14.5482 61.0757 15.2929 62.368 16.6727L66.4856 13.2341C64.5363 10.6715 61.5357 9.22599 57.9875 9.22599Z" fill="#3843D0" />
            <path d="M89.0817 9.79545H83.4966V12.139C82.0949 10.4087 80.058 9.22599 77.145 9.22599C71.2971 9.22599 66.8728 14.0226 66.8728 20.3961C66.8728 26.7697 71.2971 31.5663 77.145 31.5663C80.058 31.5663 82.1168 30.3835 83.4966 28.6752V31.0187H89.0817V9.79545ZM78.1963 14.5482C81.4597 14.5482 83.6718 17.0451 83.6718 20.3961C83.6718 23.7472 81.4597 26.244 78.1963 26.244C74.8452 26.244 72.7207 23.6376 72.7207 20.3961C72.7207 17.1546 74.8452 14.5482 78.1963 14.5482Z" fill="#3843D0" />
            <path d="M96.286 23.0681C94.0082 23.0681 92.0151 25.0174 92.0151 27.2952C92.0151 29.595 94.0082 31.5662 96.286 31.5662C98.5419 31.5662 100.513 29.595 100.513 27.2952C100.513 25.0174 98.5419 23.0681 96.286 23.0681Z" fill="#F96654" />
        </svg>
   </div>
    }
    {!isMobile &&
        <div className="base-header-title">
            <Dropdown></Dropdown>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M15 6C11.134 6 8 9.13401 8 13C8 16.866 11.134 20 15 20C18.866 20 22 16.866 22 13C22 9.13401 18.866 6 15 6ZM6 13C6 8.02944 10.0294 4 15 4C19.9706 4 24 8.02944 24 13C24 15.3869 23.0708 17.5567 21.5545 19.1676C21.6084 19.2036 21.6595 19.2453 21.7071 19.2929L26.7071 24.2929C27.0976 24.6834 27.0976 25.3166 26.7071 25.7071C26.3166 26.0976 25.6834 26.0976 25.2929 25.7071L20.2929 20.7071C20.2076 20.6218 20.1409 20.5249 20.0929 20.4215C18.6446 21.4172 16.8904 22 15 22C10.0294 22 6 17.9706 6 13ZM16.9893 7.33936C15.5458 6.83209 13.963 6.89544 12.5647 7.51644C12.06 7.7406 11.8325 8.3315 12.0567 8.83625C12.2808 9.341 12.8717 9.56846 13.3765 9.34429C14.3087 8.93029 15.3638 8.88806 16.3262 9.22624C17.2885 9.56441 18.0853 10.2574 18.5535 11.1636C18.8071 11.6542 19.4104 11.8464 19.901 11.5929C20.3917 11.3393 20.5839 10.7361 20.3303 10.2454C19.6279 8.88617 18.4327 7.84662 16.9893 7.33936Z" fill="#9A9CB5" />
            </svg>
        </div>
    }
    <div className="base-header-counter">
        {!isMobile &&
            <svg width="208" height="32" viewBox="0 0 208 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.9733 16.4667C23.88 11.0267 16.4267 10.7333 18.2267 2.82666C18.36 2.23999 17.7333 1.78666 17.2267 2.09333C12.3867 4.94666 8.90667 10.6667 11.8267 18.16C12.0667 18.7733 11.3467 19.3467 10.8267 18.9467C8.41333 17.12 8.16 14.4933 8.37333 12.6133C8.45333 11.92 7.54667 11.5867 7.16 12.16C6.25333 13.5467 5.33333 15.7867 5.33333 19.16C5.84 26.6267 12.1467 28.92 14.4133 29.2133C17.6533 29.6267 21.16 29.0267 23.68 26.72C26.4533 24.1467 27.4667 20.04 25.9733 16.4667ZM13.6 23.1733C15.52 22.7067 16.5067 21.32 16.7733 20.0933C17.2133 18.1867 15.4933 16.32 16.6533 13.3067C17.0933 15.8 21.0133 17.36 21.0133 20.08C21.12 23.4533 17.4667 26.3467 13.6 23.1733Z" fill="#D9DAE3" />
                <path d="M36.954 15.268C36.954 13.192 37.326 11.566 38.07 10.39C38.826 9.214 40.074 8.626 41.814 8.626C43.554 8.626 44.796 9.214 45.54 10.39C46.296 11.566 46.674 13.192 46.674 15.268C46.674 17.356 46.296 18.994 45.54 20.182C44.796 21.37 43.554 21.964 41.814 21.964C40.074 21.964 38.826 21.37 38.07 20.182C37.326 18.994 36.954 17.356 36.954 15.268ZM44.19 15.268C44.19 14.38 44.13 13.636 44.01 13.036C43.902 12.424 43.674 11.926 43.326 11.542C42.99 11.158 42.486 10.966 41.814 10.966C41.142 10.966 40.632 11.158 40.284 11.542C39.948 11.926 39.72 12.424 39.6 13.036C39.492 13.636 39.438 14.38 39.438 15.268C39.438 16.18 39.492 16.948 39.6 17.572C39.708 18.184 39.936 18.682 40.284 19.066C40.632 19.438 41.142 19.624 41.814 19.624C42.486 19.624 42.996 19.438 43.344 19.066C43.692 18.682 43.92 18.184 44.028 17.572C44.136 16.948 44.19 16.18 44.19 15.268Z" fill="#D9DAE3" />
                <path d="M96 1.33334L84 6.66668V14.6667C84 22.0667 89.12 28.9867 96 30.6667C102.88 28.9867 108 22.0667 108 14.6667V6.66668L96 1.33334ZM99.3333 16.7867L100.533 21.96L96 19.2267L91.4667 21.96L92.6667 16.8L88.6667 13.3467L93.9467 12.8933L96 8.02668L98.0533 12.88L103.333 13.3333L99.3333 16.7867Z" fill="#D9DAE3" />
                <path d="M116.954 15.268C116.954 13.192 117.326 11.566 118.07 10.39C118.826 9.214 120.074 8.626 121.814 8.626C123.554 8.626 124.796 9.214 125.54 10.39C126.296 11.566 126.674 13.192 126.674 15.268C126.674 17.356 126.296 18.994 125.54 20.182C124.796 21.37 123.554 21.964 121.814 21.964C120.074 21.964 118.826 21.37 118.07 20.182C117.326 18.994 116.954 17.356 116.954 15.268ZM124.19 15.268C124.19 14.38 124.13 13.636 124.01 13.036C123.902 12.424 123.674 11.926 123.326 11.542C122.99 11.158 122.486 10.966 121.814 10.966C121.142 10.966 120.632 11.158 120.284 11.542C119.948 11.926 119.72 12.424 119.6 13.036C119.492 13.636 119.438 14.38 119.438 15.268C119.438 16.18 119.492 16.948 119.6 17.572C119.708 18.184 119.936 18.682 120.284 19.066C120.632 19.438 121.142 19.624 121.814 19.624C122.486 19.624 122.996 19.438 123.344 19.066C123.692 18.682 123.92 18.184 124.028 17.572C124.136 16.948 124.19 16.18 124.19 15.268Z" fill="#D9DAE3" />
                <path d="M176 29.3333C182.627 29.3333 188 23.96 188 17.3333C181.373 17.3333 176 22.7067 176 29.3333ZM167.467 13.6667C167.467 15.5067 168.96 17 170.8 17C171.507 17 172.147 16.7867 172.693 16.4133L172.667 16.6667C172.667 18.5067 174.16 20 176 20C177.84 20 179.333 18.5067 179.333 16.6667L179.307 16.4133C179.84 16.7867 180.493 17 181.2 17C183.04 17 184.533 15.5067 184.533 13.6667C184.533 12.3333 183.747 11.2 182.627 10.6667C183.747 10.1333 184.533 9.00001 184.533 7.66668C184.533 5.82668 183.04 4.33334 181.2 4.33334C180.493 4.33334 179.853 4.54668 179.307 4.92001L179.333 4.66668C179.333 2.82668 177.84 1.33334 176 1.33334C174.16 1.33334 172.667 2.82668 172.667 4.66668L172.693 4.92001C172.16 4.54668 171.507 4.33334 170.8 4.33334C168.96 4.33334 167.467 5.82668 167.467 7.66668C167.467 9.00001 168.253 10.1333 169.373 10.6667C168.253 11.2 167.467 12.3333 167.467 13.6667ZM176 7.33334C177.84 7.33334 179.333 8.82668 179.333 10.6667C179.333 12.5067 177.84 14 176 14C174.16 14 172.667 12.5067 172.667 10.6667C172.667 8.82668 174.16 7.33334 176 7.33334ZM164 17.3333C164 23.96 169.373 29.3333 176 29.3333C176 22.7067 170.627 17.3333 164 17.3333Z" fill="#D9DAE3" />
                <path d="M196.954 15.268C196.954 13.192 197.326 11.566 198.07 10.39C198.826 9.214 200.074 8.626 201.814 8.626C203.554 8.626 204.796 9.214 205.54 10.39C206.296 11.566 206.674 13.192 206.674 15.268C206.674 17.356 206.296 18.994 205.54 20.182C204.796 21.37 203.554 21.964 201.814 21.964C200.074 21.964 198.826 21.37 198.07 20.182C197.326 18.994 196.954 17.356 196.954 15.268ZM204.19 15.268C204.19 14.38 204.13 13.636 204.01 13.036C203.902 12.424 203.674 11.926 203.326 11.542C202.99 11.158 202.486 10.966 201.814 10.966C201.142 10.966 200.632 11.158 200.284 11.542C199.948 11.926 199.72 12.424 199.6 13.036C199.492 13.636 199.438 14.38 199.438 15.268C199.438 16.18 199.492 16.948 199.6 17.572C199.708 18.184 199.936 18.682 200.284 19.066C200.632 19.438 201.142 19.624 201.814 19.624C202.486 19.624 202.996 19.438 203.344 19.066C203.692 18.682 203.92 18.184 204.028 17.572C204.136 16.948 204.19 16.18 204.19 15.268Z" fill="#D9DAE3" />
            </svg>}
    </div>
    {
        <div className="base-header-user">
            <div className="base-header-actions">
                <div className="base-header-actions">
                    <div className="base-header-actions-notifications">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="16" cy="5" r="2" fill="#9A9CB5" />
                            <path d="M10.2397 10.9419C10.6771 8.09875 13.1234 6 16 6V6C18.8766 6 21.3229 8.09875 21.7603 10.9419L22.7393 17.3057C22.9087 18.4065 23.4246 19.4246 24.2122 20.2122V20.2122C24.8719 20.8719 24.4047 22 23.4716 22H8.52838C7.59535 22 7.12808 20.8719 7.78784 20.2122V20.2122C8.57538 19.4246 9.09131 18.4065 9.26067 17.3057L10.2397 10.9419Z" stroke="#9A9CB5" strokeWidth="2" />
                            <path d="M16 27C17.9838 27 19.6303 25.9169 19.9456 24.4961C20.0054 24.2266 19.7761 24 19.5 24H12.5C12.2239 24 11.9946 24.2266 12.0544 24.4961C12.3697 25.9169 14.0162 27 16 27Z" fill="#9A9CB5" />
                        </svg>
                    </div>
                    <div className="base-header-actions-logout">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="16" cy="16" r="16" fill="#3843D0" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M3.75751 26.3018C4.24161 23.263 6.95457 20.6996 10.7169 19.4431C12.0925 20.8343 13.9297 21.7065 16.0268 21.7065C18.1102 21.7065 19.9372 20.8456 21.3099 19.4701C25.0526 20.7435 27.7401 23.3146 28.1976 26.3551C25.2628 29.8086 20.8873 31.9998 16.0001 31.9998C11.0878 31.9998 6.69252 29.7861 3.75751 26.3018ZM22.2401 12.9065C22.2401 15.4513 21.0662 17.6831 19.3029 18.9348C18.3518 19.6099 17.2292 19.9998 16.0268 19.9998C14.8472 19.9998 13.7444 19.6245 12.8049 18.9729C11.0115 17.7288 9.81343 15.4774 9.81343 12.9065C9.81343 8.98893 12.5952 5.81314 16.0268 5.81314C19.4583 5.81314 22.2401 8.98893 22.2401 12.9065Z" fill="#FBFEFF" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    }
</div>
}

export default BaseHeader;
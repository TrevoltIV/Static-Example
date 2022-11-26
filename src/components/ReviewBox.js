import Review from '../components/Review'




export default function ReviewBox() {
    return (
        <div className="sidebar-wrapper">
            <div className="sidebar">
                <div className="sidebar-login-wrapper">
                    <h2>Reviews</h2>
                    <div className="sidebar-login">
                        <Review rating="5 Stars" text="Great company" date="11/12/2021" />
                        <Review rating="4 Stars" text="Amazing customer support" date="04/19/2022" />
                        <Review rating="5 Stars" text="Always delivered on time" date="07/25/2022" />
                    </div>
                </div>
            </div>
        </div>
    )
}
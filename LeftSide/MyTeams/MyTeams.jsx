import React from "react";
import g from './MyTeams.module.css';
import { Link } from "react-router-dom";

const MyTeams = (props) => {
    return ( <div className={g.myteams}>

        <div className={g.item}> 
        <Link to="/VeamTseros">{props.team1}</Link></div>
        <img src="https://tvoyaparallel.ru/wp-content/uploads/2021/02/vsosh.jpg"/>
        <div>
            <button>press to join pls</button>
        </div>

        <div className={g.item}>
            <Link to="/BadGirls">{props.team2}</Link></div>
        <img src="https://yandex-images.clstorage.net/R5Ce0i184/3c4983hJcZeY/XYBUJZugCtONM5M1a-Ha_14FHe_qnTiQ4TKr5_S0hHd5VabbLDmeJDr_EgVAPM8_Pm_zG0DTwgRQGCPJmLSz7dmUlZR_UKrDjQNDpNtxqk_e9Z2uqu0dFZCH_kNkRIDTXNW1GJtuyReNOTXHIu5LurvPljrxEtM35mj1vC-x1mqeMsZkzgB74uizMEVbAan6zvR-6lia2iAGh4wwIUQSALvSRFlZ7cklX7qEd2Nuu0vajlTr1JGAJyccde5vM0TIPbBmNm0R27AZAqG1quMLmh2H7Yp4erqwhJffEnGFkHJoEfSKSP2aZS8Y1GVC_dhKKo6UeefC4hd3ThZOj0LHaQ6RNlYs0VuDiJCzNytDe6tuNC64SUh4kCb3DrKBR-GSSTLm-Tj_eRRs2uUk8D4aacndtihWs1DHVdzm_g8S5JlOE-ckz3IqYqqjQbVIAonrz0WO-EiqGtEGty-i4pYB4XlStvsJjKl3bmm0FWI9mmvZz-d59sFSBpdeBw5s8USpDrAmd_xBejI54aKH2CO4ao123SkLSfqwBWdNw0JngNP7EdT4eb4rJC2JdfZCX-lYi0_0CtTjoTRVDeb-PIDFWuySFRTt88kCiLJittozO-lvp53biRnoknQlP6IhplJTK2HWuHkty7StKnUnEywKaIq9pzs0wOMmxJxGPPwS5Aj8URfGnSNb0YqRYdUIs_prDnYd-4to6yPl1I5C0dbxMxlx9FsYfAtXHVm1REKc2ToKv_fJ9oHAB3ce1K0_QTaqfeHmZE0DW5LZM0H3uqKISDz379t5qkuCJpXdorM0QnF4E5QZGA2L1O3oleRCLZt4WE_kKNUD4Qc2n9Wd3LHUGd3RNSeto0uxmfJAVLlj6Akstc26SntZctb33jNRJvLy-iLX-3s-O6QNqFRVgkyKSHheVTplsuClJpwEXi7AFJg888XlLZKo8OvBolQJcRnrj_e9qnqaa1OER2_i8"/>
        <div>
            <button>press to join pls</button>
        </div>

    </div>)
}

export default MyTeams;
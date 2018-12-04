import { Time } from "@angular/common/src/i18n/locale_data_api";

export class Timezone {
    public meta: {
        code: number;
    }
    public data: {
        ip:string;
        Id: number;
        country: string;
        country_code: string;
        city: string;
        timezone: {
            id: string;
            phone_prefix: number;
            country_code: string;
            country_name: string;
            iso3166_1_alpha_2: string;
            iso3166_1_alpha_3: string;
            currency_name: string;
            currency_code: string;
            languages: string;

        }
    }
   public datetime:{
            time:string;
            date_time_ymd:Date;

    }
}
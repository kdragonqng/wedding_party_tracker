import 'reflect-metadata';
import { container, singleton } from 'tsyringe';
import en from '../../../assets/language/en.json';
import vi from '../../../assets/language/vi.json';
import { StorageService } from './storageService';
import { LanguageText } from '../../types/languageText';
import { StorageKey } from '../../common/constants/storageKey';
import { LanguageCode } from '../../common/constants/languageCode';

@singleton()
export class LanguageService {
    public readonly storeService = container.resolve(StorageService);
    public text!: LanguageText;
    public currentLanguage!: string;

    constructor() {
        this.initLanguage();
    }

    /** Initialize language */
    public async initLanguage() {
        console.log('initLanguage');
        let currentLanguage = await this.storeService.load<string>(StorageKey.language);
        if (!currentLanguage) {
            currentLanguage = LanguageCode.VI;
        }
        this.getLanguageText(currentLanguage);
    }

    /** Set language to store */
    public async setLanguage(value: string) {
        const currentLanguage = await this.storeService.load<string>(StorageKey.language);
        if (currentLanguage !== value) {
            await this.storeService.save<string>(StorageKey.language, value);
            this.getLanguageText(value);
        }

    }

    public getLanguageText(value: string): void {
        const me = this;
        me.currentLanguage = value;
        if (value === LanguageCode.EN) {
            me.text = en as unknown as LanguageText;
        } else {
            me.text = vi as unknown as LanguageText;
        }
    }
}
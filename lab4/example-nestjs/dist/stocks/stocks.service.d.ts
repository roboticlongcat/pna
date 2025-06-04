import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { Stock } from './entities/stock.entity';
import { FileService } from '../file.service';
export declare class StocksService {
    private fileService;
    constructor(fileService: FileService<Stock[]>);
    create(createStockDto: CreateStockDto): void;
    findAll(title?: string, limit?: number): Stock[];
    findOne(id: number): Stock | null;
    update(id: number, updateStockDto: UpdateStockDto): void;
    remove(id: number): void;
}

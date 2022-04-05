import { MatchReader } from './MatchReader'
import { MatchResult } from './MatchResult'
import { CsvFileReader } from './CsvFileReader'
import { Summary } from './Summary'

// Creat an object that satisfies the "DataReader" interface
const csvFileReader = new CsvFileReader('football.csv')

//Creat an instance of MatchReader and pass in something satisfying the
// 'DataReader' interface
const matchReader = new MatchReader(csvFileReader)
matchReader.load()

// * access matchReader.matches

// const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReports())

//instead we can use a statice method to return a pre-configured instance
const summary = Summary.winsAnalysisWithHtmlReport('Man United')
summary.buildAndPrintReport(matchReader.matches)

//We can do the same with match reader
// const matchReader = MatchReader.fromCsv('football.csv')

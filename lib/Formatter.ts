

export abstract class Formatter<I = any,O = any> {
    public abstract setValue(val: I): Formatter<I,O>
    public abstract format(): O
}
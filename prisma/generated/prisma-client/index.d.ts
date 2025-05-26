
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model WaitlistEntry
 * 
 */
export type WaitlistEntry = $Result.DefaultSelection<Prisma.$WaitlistEntryPayload>
/**
 * Model Event2
 * 
 */
export type Event2 = $Result.DefaultSelection<Prisma.$Event2Payload>

/**
 * Enums
 */
export namespace $Enums {
  export const Entry: {
  Solo: 'Solo',
  Couple: 'Couple'
};

export type Entry = (typeof Entry)[keyof typeof Entry]


export const FutureJourney: {
  Yes: 'Yes',
  OnlyForThisSession: 'OnlyForThisSession',
  NotAtTheMoment: 'NotAtTheMoment'
};

export type FutureJourney = (typeof FutureJourney)[keyof typeof FutureJourney]


export const Occupation: {
  Entrepreneur: 'Entrepreneur',
  WorkingProfessional: 'WorkingProfessional',
  Creative: 'Creative',
  WellnessPractitioner: 'WellnessPractitioner',
  Student: 'Student',
  Athlete: 'Athlete',
  Homemaker: 'Homemaker',
  Exploring: 'Exploring',
  Other: 'Other'
};

export type Occupation = (typeof Occupation)[keyof typeof Occupation]


export const PreferredSession: {
  Sunrise: 'Sunrise',
  Sunset: 'Sunset',
  Night: 'Night',
  Flexible: 'Flexible'
};

export type PreferredSession = (typeof PreferredSession)[keyof typeof PreferredSession]


export const SoundHealingExperience: {
  YesRegularly: 'YesRegularly',
  OnceOrTwice: 'OnceOrTwice',
  NotYetButCurious: 'NotYetButCurious',
  FirstTime: 'FirstTime'
};

export type SoundHealingExperience = (typeof SoundHealingExperience)[keyof typeof SoundHealingExperience]


export const WaterComfort: {
  YesAbsolutely: 'YesAbsolutely',
  LoveToTryWithSupport: 'LoveToTryWithSupport',
  PreferGroundingSoundJourneys: 'PreferGroundingSoundJourneys'
};

export type WaterComfort = (typeof WaterComfort)[keyof typeof WaterComfort]


export const Jobrole: {
  ENTREPRENEUR_FOUNDER: 'ENTREPRENEUR_FOUNDER',
  WORKING_PROFESSIONAL: 'WORKING_PROFESSIONAL',
  CREATIVE_ARTIST: 'CREATIVE_ARTIST',
  WELLNESS_PRACTITIONER: 'WELLNESS_PRACTITIONER',
  STUDENT: 'STUDENT',
  ATHLETE_SPORTSPERSON: 'ATHLETE_SPORTSPERSON',
  HOMEMAKER: 'HOMEMAKER',
  EXPLORING: 'EXPLORING',
  OTHER: 'OTHER'
};

export type Jobrole = (typeof Jobrole)[keyof typeof Jobrole]


export const FitnessLevel: {
  BEGINNER: 'BEGINNER',
  INTERMEDIATE: 'INTERMEDIATE',
  ADVANCED: 'ADVANCED'
};

export type FitnessLevel = (typeof FitnessLevel)[keyof typeof FitnessLevel]


export const YesNo: {
  YES: 'YES',
  NO: 'NO'
};

export type YesNo = (typeof YesNo)[keyof typeof YesNo]


export const CaffeineSensitivity: {
  YES: 'YES',
  NO: 'NO',
  NOT_SURE: 'NOT_SURE'
};

export type CaffeineSensitivity = (typeof CaffeineSensitivity)[keyof typeof CaffeineSensitivity]

}

export type Entry = $Enums.Entry

export const Entry: typeof $Enums.Entry

export type FutureJourney = $Enums.FutureJourney

export const FutureJourney: typeof $Enums.FutureJourney

export type Occupation = $Enums.Occupation

export const Occupation: typeof $Enums.Occupation

export type PreferredSession = $Enums.PreferredSession

export const PreferredSession: typeof $Enums.PreferredSession

export type SoundHealingExperience = $Enums.SoundHealingExperience

export const SoundHealingExperience: typeof $Enums.SoundHealingExperience

export type WaterComfort = $Enums.WaterComfort

export const WaterComfort: typeof $Enums.WaterComfort

export type Jobrole = $Enums.Jobrole

export const Jobrole: typeof $Enums.Jobrole

export type FitnessLevel = $Enums.FitnessLevel

export const FitnessLevel: typeof $Enums.FitnessLevel

export type YesNo = $Enums.YesNo

export const YesNo: typeof $Enums.YesNo

export type CaffeineSensitivity = $Enums.CaffeineSensitivity

export const CaffeineSensitivity: typeof $Enums.CaffeineSensitivity

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more WaitlistEntries
 * const waitlistEntries = await prisma.waitlistEntry.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more WaitlistEntries
   * const waitlistEntries = await prisma.waitlistEntry.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.waitlistEntry`: Exposes CRUD operations for the **WaitlistEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WaitlistEntries
    * const waitlistEntries = await prisma.waitlistEntry.findMany()
    * ```
    */
  get waitlistEntry(): Prisma.WaitlistEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event2`: Exposes CRUD operations for the **Event2** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Event2s
    * const event2s = await prisma.event2.findMany()
    * ```
    */
  get event2(): Prisma.Event2Delegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    WaitlistEntry: 'WaitlistEntry',
    Event2: 'Event2'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "waitlistEntry" | "event2"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      WaitlistEntry: {
        payload: Prisma.$WaitlistEntryPayload<ExtArgs>
        fields: Prisma.WaitlistEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WaitlistEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitlistEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WaitlistEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitlistEntryPayload>
          }
          findFirst: {
            args: Prisma.WaitlistEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitlistEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WaitlistEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitlistEntryPayload>
          }
          findMany: {
            args: Prisma.WaitlistEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitlistEntryPayload>[]
          }
          create: {
            args: Prisma.WaitlistEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitlistEntryPayload>
          }
          createMany: {
            args: Prisma.WaitlistEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WaitlistEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitlistEntryPayload>[]
          }
          delete: {
            args: Prisma.WaitlistEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitlistEntryPayload>
          }
          update: {
            args: Prisma.WaitlistEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitlistEntryPayload>
          }
          deleteMany: {
            args: Prisma.WaitlistEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WaitlistEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WaitlistEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitlistEntryPayload>[]
          }
          upsert: {
            args: Prisma.WaitlistEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitlistEntryPayload>
          }
          aggregate: {
            args: Prisma.WaitlistEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWaitlistEntry>
          }
          groupBy: {
            args: Prisma.WaitlistEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<WaitlistEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.WaitlistEntryCountArgs<ExtArgs>
            result: $Utils.Optional<WaitlistEntryCountAggregateOutputType> | number
          }
        }
      }
      Event2: {
        payload: Prisma.$Event2Payload<ExtArgs>
        fields: Prisma.Event2FieldRefs
        operations: {
          findUnique: {
            args: Prisma.Event2FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Event2Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Event2FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Event2Payload>
          }
          findFirst: {
            args: Prisma.Event2FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Event2Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Event2FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Event2Payload>
          }
          findMany: {
            args: Prisma.Event2FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Event2Payload>[]
          }
          create: {
            args: Prisma.Event2CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Event2Payload>
          }
          createMany: {
            args: Prisma.Event2CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Event2CreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Event2Payload>[]
          }
          delete: {
            args: Prisma.Event2DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Event2Payload>
          }
          update: {
            args: Prisma.Event2UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Event2Payload>
          }
          deleteMany: {
            args: Prisma.Event2DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Event2UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Event2UpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Event2Payload>[]
          }
          upsert: {
            args: Prisma.Event2UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Event2Payload>
          }
          aggregate: {
            args: Prisma.Event2AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent2>
          }
          groupBy: {
            args: Prisma.Event2GroupByArgs<ExtArgs>
            result: $Utils.Optional<Event2GroupByOutputType>[]
          }
          count: {
            args: Prisma.Event2CountArgs<ExtArgs>
            result: $Utils.Optional<Event2CountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    waitlistEntry?: WaitlistEntryOmit
    event2?: Event2Omit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model WaitlistEntry
   */

  export type AggregateWaitlistEntry = {
    _count: WaitlistEntryCountAggregateOutputType | null
    _avg: WaitlistEntryAvgAggregateOutputType | null
    _sum: WaitlistEntrySumAggregateOutputType | null
    _min: WaitlistEntryMinAggregateOutputType | null
    _max: WaitlistEntryMaxAggregateOutputType | null
  }

  export type WaitlistEntryAvgAggregateOutputType = {
    id: number | null
    age: number | null
  }

  export type WaitlistEntrySumAggregateOutputType = {
    id: number | null
    age: number | null
  }

  export type WaitlistEntryMinAggregateOutputType = {
    id: number | null
    fullName: string | null
    email: string | null
    phoneNumber: string | null
    age: number | null
    occupation: $Enums.Occupation | null
    soundHealingExp: $Enums.SoundHealingExperience | null
    waterComfort: $Enums.WaterComfort | null
    preferredSession: $Enums.PreferredSession | null
    futureJourney: $Enums.FutureJourney | null
    instagramHandle: string | null
    createdAt: Date | null
  }

  export type WaitlistEntryMaxAggregateOutputType = {
    id: number | null
    fullName: string | null
    email: string | null
    phoneNumber: string | null
    age: number | null
    occupation: $Enums.Occupation | null
    soundHealingExp: $Enums.SoundHealingExperience | null
    waterComfort: $Enums.WaterComfort | null
    preferredSession: $Enums.PreferredSession | null
    futureJourney: $Enums.FutureJourney | null
    instagramHandle: string | null
    createdAt: Date | null
  }

  export type WaitlistEntryCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    phoneNumber: number
    age: number
    occupation: number
    soundHealingExp: number
    waterComfort: number
    preferredSession: number
    futureJourney: number
    instagramHandle: number
    createdAt: number
    _all: number
  }


  export type WaitlistEntryAvgAggregateInputType = {
    id?: true
    age?: true
  }

  export type WaitlistEntrySumAggregateInputType = {
    id?: true
    age?: true
  }

  export type WaitlistEntryMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    phoneNumber?: true
    age?: true
    occupation?: true
    soundHealingExp?: true
    waterComfort?: true
    preferredSession?: true
    futureJourney?: true
    instagramHandle?: true
    createdAt?: true
  }

  export type WaitlistEntryMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    phoneNumber?: true
    age?: true
    occupation?: true
    soundHealingExp?: true
    waterComfort?: true
    preferredSession?: true
    futureJourney?: true
    instagramHandle?: true
    createdAt?: true
  }

  export type WaitlistEntryCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    phoneNumber?: true
    age?: true
    occupation?: true
    soundHealingExp?: true
    waterComfort?: true
    preferredSession?: true
    futureJourney?: true
    instagramHandle?: true
    createdAt?: true
    _all?: true
  }

  export type WaitlistEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WaitlistEntry to aggregate.
     */
    where?: WaitlistEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaitlistEntries to fetch.
     */
    orderBy?: WaitlistEntryOrderByWithRelationInput | WaitlistEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WaitlistEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaitlistEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaitlistEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WaitlistEntries
    **/
    _count?: true | WaitlistEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WaitlistEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WaitlistEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WaitlistEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WaitlistEntryMaxAggregateInputType
  }

  export type GetWaitlistEntryAggregateType<T extends WaitlistEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateWaitlistEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWaitlistEntry[P]>
      : GetScalarType<T[P], AggregateWaitlistEntry[P]>
  }




  export type WaitlistEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaitlistEntryWhereInput
    orderBy?: WaitlistEntryOrderByWithAggregationInput | WaitlistEntryOrderByWithAggregationInput[]
    by: WaitlistEntryScalarFieldEnum[] | WaitlistEntryScalarFieldEnum
    having?: WaitlistEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WaitlistEntryCountAggregateInputType | true
    _avg?: WaitlistEntryAvgAggregateInputType
    _sum?: WaitlistEntrySumAggregateInputType
    _min?: WaitlistEntryMinAggregateInputType
    _max?: WaitlistEntryMaxAggregateInputType
  }

  export type WaitlistEntryGroupByOutputType = {
    id: number
    fullName: string
    email: string
    phoneNumber: string | null
    age: number | null
    occupation: $Enums.Occupation
    soundHealingExp: $Enums.SoundHealingExperience
    waterComfort: $Enums.WaterComfort
    preferredSession: $Enums.PreferredSession
    futureJourney: $Enums.FutureJourney
    instagramHandle: string | null
    createdAt: Date
    _count: WaitlistEntryCountAggregateOutputType | null
    _avg: WaitlistEntryAvgAggregateOutputType | null
    _sum: WaitlistEntrySumAggregateOutputType | null
    _min: WaitlistEntryMinAggregateOutputType | null
    _max: WaitlistEntryMaxAggregateOutputType | null
  }

  type GetWaitlistEntryGroupByPayload<T extends WaitlistEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WaitlistEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WaitlistEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WaitlistEntryGroupByOutputType[P]>
            : GetScalarType<T[P], WaitlistEntryGroupByOutputType[P]>
        }
      >
    >


  export type WaitlistEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    phoneNumber?: boolean
    age?: boolean
    occupation?: boolean
    soundHealingExp?: boolean
    waterComfort?: boolean
    preferredSession?: boolean
    futureJourney?: boolean
    instagramHandle?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["waitlistEntry"]>

  export type WaitlistEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    phoneNumber?: boolean
    age?: boolean
    occupation?: boolean
    soundHealingExp?: boolean
    waterComfort?: boolean
    preferredSession?: boolean
    futureJourney?: boolean
    instagramHandle?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["waitlistEntry"]>

  export type WaitlistEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    phoneNumber?: boolean
    age?: boolean
    occupation?: boolean
    soundHealingExp?: boolean
    waterComfort?: boolean
    preferredSession?: boolean
    futureJourney?: boolean
    instagramHandle?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["waitlistEntry"]>

  export type WaitlistEntrySelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    phoneNumber?: boolean
    age?: boolean
    occupation?: boolean
    soundHealingExp?: boolean
    waterComfort?: boolean
    preferredSession?: boolean
    futureJourney?: boolean
    instagramHandle?: boolean
    createdAt?: boolean
  }

  export type WaitlistEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "email" | "phoneNumber" | "age" | "occupation" | "soundHealingExp" | "waterComfort" | "preferredSession" | "futureJourney" | "instagramHandle" | "createdAt", ExtArgs["result"]["waitlistEntry"]>

  export type $WaitlistEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WaitlistEntry"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullName: string
      email: string
      phoneNumber: string | null
      age: number | null
      occupation: $Enums.Occupation
      soundHealingExp: $Enums.SoundHealingExperience
      waterComfort: $Enums.WaterComfort
      preferredSession: $Enums.PreferredSession
      futureJourney: $Enums.FutureJourney
      instagramHandle: string | null
      createdAt: Date
    }, ExtArgs["result"]["waitlistEntry"]>
    composites: {}
  }

  type WaitlistEntryGetPayload<S extends boolean | null | undefined | WaitlistEntryDefaultArgs> = $Result.GetResult<Prisma.$WaitlistEntryPayload, S>

  type WaitlistEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WaitlistEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WaitlistEntryCountAggregateInputType | true
    }

  export interface WaitlistEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WaitlistEntry'], meta: { name: 'WaitlistEntry' } }
    /**
     * Find zero or one WaitlistEntry that matches the filter.
     * @param {WaitlistEntryFindUniqueArgs} args - Arguments to find a WaitlistEntry
     * @example
     * // Get one WaitlistEntry
     * const waitlistEntry = await prisma.waitlistEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WaitlistEntryFindUniqueArgs>(args: SelectSubset<T, WaitlistEntryFindUniqueArgs<ExtArgs>>): Prisma__WaitlistEntryClient<$Result.GetResult<Prisma.$WaitlistEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WaitlistEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WaitlistEntryFindUniqueOrThrowArgs} args - Arguments to find a WaitlistEntry
     * @example
     * // Get one WaitlistEntry
     * const waitlistEntry = await prisma.waitlistEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WaitlistEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, WaitlistEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WaitlistEntryClient<$Result.GetResult<Prisma.$WaitlistEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WaitlistEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaitlistEntryFindFirstArgs} args - Arguments to find a WaitlistEntry
     * @example
     * // Get one WaitlistEntry
     * const waitlistEntry = await prisma.waitlistEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WaitlistEntryFindFirstArgs>(args?: SelectSubset<T, WaitlistEntryFindFirstArgs<ExtArgs>>): Prisma__WaitlistEntryClient<$Result.GetResult<Prisma.$WaitlistEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WaitlistEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaitlistEntryFindFirstOrThrowArgs} args - Arguments to find a WaitlistEntry
     * @example
     * // Get one WaitlistEntry
     * const waitlistEntry = await prisma.waitlistEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WaitlistEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, WaitlistEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__WaitlistEntryClient<$Result.GetResult<Prisma.$WaitlistEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WaitlistEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaitlistEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WaitlistEntries
     * const waitlistEntries = await prisma.waitlistEntry.findMany()
     * 
     * // Get first 10 WaitlistEntries
     * const waitlistEntries = await prisma.waitlistEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const waitlistEntryWithIdOnly = await prisma.waitlistEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WaitlistEntryFindManyArgs>(args?: SelectSubset<T, WaitlistEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaitlistEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WaitlistEntry.
     * @param {WaitlistEntryCreateArgs} args - Arguments to create a WaitlistEntry.
     * @example
     * // Create one WaitlistEntry
     * const WaitlistEntry = await prisma.waitlistEntry.create({
     *   data: {
     *     // ... data to create a WaitlistEntry
     *   }
     * })
     * 
     */
    create<T extends WaitlistEntryCreateArgs>(args: SelectSubset<T, WaitlistEntryCreateArgs<ExtArgs>>): Prisma__WaitlistEntryClient<$Result.GetResult<Prisma.$WaitlistEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WaitlistEntries.
     * @param {WaitlistEntryCreateManyArgs} args - Arguments to create many WaitlistEntries.
     * @example
     * // Create many WaitlistEntries
     * const waitlistEntry = await prisma.waitlistEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WaitlistEntryCreateManyArgs>(args?: SelectSubset<T, WaitlistEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WaitlistEntries and returns the data saved in the database.
     * @param {WaitlistEntryCreateManyAndReturnArgs} args - Arguments to create many WaitlistEntries.
     * @example
     * // Create many WaitlistEntries
     * const waitlistEntry = await prisma.waitlistEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WaitlistEntries and only return the `id`
     * const waitlistEntryWithIdOnly = await prisma.waitlistEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WaitlistEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, WaitlistEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaitlistEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WaitlistEntry.
     * @param {WaitlistEntryDeleteArgs} args - Arguments to delete one WaitlistEntry.
     * @example
     * // Delete one WaitlistEntry
     * const WaitlistEntry = await prisma.waitlistEntry.delete({
     *   where: {
     *     // ... filter to delete one WaitlistEntry
     *   }
     * })
     * 
     */
    delete<T extends WaitlistEntryDeleteArgs>(args: SelectSubset<T, WaitlistEntryDeleteArgs<ExtArgs>>): Prisma__WaitlistEntryClient<$Result.GetResult<Prisma.$WaitlistEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WaitlistEntry.
     * @param {WaitlistEntryUpdateArgs} args - Arguments to update one WaitlistEntry.
     * @example
     * // Update one WaitlistEntry
     * const waitlistEntry = await prisma.waitlistEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WaitlistEntryUpdateArgs>(args: SelectSubset<T, WaitlistEntryUpdateArgs<ExtArgs>>): Prisma__WaitlistEntryClient<$Result.GetResult<Prisma.$WaitlistEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WaitlistEntries.
     * @param {WaitlistEntryDeleteManyArgs} args - Arguments to filter WaitlistEntries to delete.
     * @example
     * // Delete a few WaitlistEntries
     * const { count } = await prisma.waitlistEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WaitlistEntryDeleteManyArgs>(args?: SelectSubset<T, WaitlistEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WaitlistEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaitlistEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WaitlistEntries
     * const waitlistEntry = await prisma.waitlistEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WaitlistEntryUpdateManyArgs>(args: SelectSubset<T, WaitlistEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WaitlistEntries and returns the data updated in the database.
     * @param {WaitlistEntryUpdateManyAndReturnArgs} args - Arguments to update many WaitlistEntries.
     * @example
     * // Update many WaitlistEntries
     * const waitlistEntry = await prisma.waitlistEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WaitlistEntries and only return the `id`
     * const waitlistEntryWithIdOnly = await prisma.waitlistEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WaitlistEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, WaitlistEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaitlistEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WaitlistEntry.
     * @param {WaitlistEntryUpsertArgs} args - Arguments to update or create a WaitlistEntry.
     * @example
     * // Update or create a WaitlistEntry
     * const waitlistEntry = await prisma.waitlistEntry.upsert({
     *   create: {
     *     // ... data to create a WaitlistEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WaitlistEntry we want to update
     *   }
     * })
     */
    upsert<T extends WaitlistEntryUpsertArgs>(args: SelectSubset<T, WaitlistEntryUpsertArgs<ExtArgs>>): Prisma__WaitlistEntryClient<$Result.GetResult<Prisma.$WaitlistEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WaitlistEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaitlistEntryCountArgs} args - Arguments to filter WaitlistEntries to count.
     * @example
     * // Count the number of WaitlistEntries
     * const count = await prisma.waitlistEntry.count({
     *   where: {
     *     // ... the filter for the WaitlistEntries we want to count
     *   }
     * })
    **/
    count<T extends WaitlistEntryCountArgs>(
      args?: Subset<T, WaitlistEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WaitlistEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WaitlistEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaitlistEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WaitlistEntryAggregateArgs>(args: Subset<T, WaitlistEntryAggregateArgs>): Prisma.PrismaPromise<GetWaitlistEntryAggregateType<T>>

    /**
     * Group by WaitlistEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaitlistEntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WaitlistEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WaitlistEntryGroupByArgs['orderBy'] }
        : { orderBy?: WaitlistEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WaitlistEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWaitlistEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WaitlistEntry model
   */
  readonly fields: WaitlistEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WaitlistEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WaitlistEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WaitlistEntry model
   */
  interface WaitlistEntryFieldRefs {
    readonly id: FieldRef<"WaitlistEntry", 'Int'>
    readonly fullName: FieldRef<"WaitlistEntry", 'String'>
    readonly email: FieldRef<"WaitlistEntry", 'String'>
    readonly phoneNumber: FieldRef<"WaitlistEntry", 'String'>
    readonly age: FieldRef<"WaitlistEntry", 'Int'>
    readonly occupation: FieldRef<"WaitlistEntry", 'Occupation'>
    readonly soundHealingExp: FieldRef<"WaitlistEntry", 'SoundHealingExperience'>
    readonly waterComfort: FieldRef<"WaitlistEntry", 'WaterComfort'>
    readonly preferredSession: FieldRef<"WaitlistEntry", 'PreferredSession'>
    readonly futureJourney: FieldRef<"WaitlistEntry", 'FutureJourney'>
    readonly instagramHandle: FieldRef<"WaitlistEntry", 'String'>
    readonly createdAt: FieldRef<"WaitlistEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WaitlistEntry findUnique
   */
  export type WaitlistEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaitlistEntry
     */
    select?: WaitlistEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaitlistEntry
     */
    omit?: WaitlistEntryOmit<ExtArgs> | null
    /**
     * Filter, which WaitlistEntry to fetch.
     */
    where: WaitlistEntryWhereUniqueInput
  }

  /**
   * WaitlistEntry findUniqueOrThrow
   */
  export type WaitlistEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaitlistEntry
     */
    select?: WaitlistEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaitlistEntry
     */
    omit?: WaitlistEntryOmit<ExtArgs> | null
    /**
     * Filter, which WaitlistEntry to fetch.
     */
    where: WaitlistEntryWhereUniqueInput
  }

  /**
   * WaitlistEntry findFirst
   */
  export type WaitlistEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaitlistEntry
     */
    select?: WaitlistEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaitlistEntry
     */
    omit?: WaitlistEntryOmit<ExtArgs> | null
    /**
     * Filter, which WaitlistEntry to fetch.
     */
    where?: WaitlistEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaitlistEntries to fetch.
     */
    orderBy?: WaitlistEntryOrderByWithRelationInput | WaitlistEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WaitlistEntries.
     */
    cursor?: WaitlistEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaitlistEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaitlistEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaitlistEntries.
     */
    distinct?: WaitlistEntryScalarFieldEnum | WaitlistEntryScalarFieldEnum[]
  }

  /**
   * WaitlistEntry findFirstOrThrow
   */
  export type WaitlistEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaitlistEntry
     */
    select?: WaitlistEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaitlistEntry
     */
    omit?: WaitlistEntryOmit<ExtArgs> | null
    /**
     * Filter, which WaitlistEntry to fetch.
     */
    where?: WaitlistEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaitlistEntries to fetch.
     */
    orderBy?: WaitlistEntryOrderByWithRelationInput | WaitlistEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WaitlistEntries.
     */
    cursor?: WaitlistEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaitlistEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaitlistEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaitlistEntries.
     */
    distinct?: WaitlistEntryScalarFieldEnum | WaitlistEntryScalarFieldEnum[]
  }

  /**
   * WaitlistEntry findMany
   */
  export type WaitlistEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaitlistEntry
     */
    select?: WaitlistEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaitlistEntry
     */
    omit?: WaitlistEntryOmit<ExtArgs> | null
    /**
     * Filter, which WaitlistEntries to fetch.
     */
    where?: WaitlistEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaitlistEntries to fetch.
     */
    orderBy?: WaitlistEntryOrderByWithRelationInput | WaitlistEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WaitlistEntries.
     */
    cursor?: WaitlistEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaitlistEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaitlistEntries.
     */
    skip?: number
    distinct?: WaitlistEntryScalarFieldEnum | WaitlistEntryScalarFieldEnum[]
  }

  /**
   * WaitlistEntry create
   */
  export type WaitlistEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaitlistEntry
     */
    select?: WaitlistEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaitlistEntry
     */
    omit?: WaitlistEntryOmit<ExtArgs> | null
    /**
     * The data needed to create a WaitlistEntry.
     */
    data: XOR<WaitlistEntryCreateInput, WaitlistEntryUncheckedCreateInput>
  }

  /**
   * WaitlistEntry createMany
   */
  export type WaitlistEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WaitlistEntries.
     */
    data: WaitlistEntryCreateManyInput | WaitlistEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WaitlistEntry createManyAndReturn
   */
  export type WaitlistEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaitlistEntry
     */
    select?: WaitlistEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WaitlistEntry
     */
    omit?: WaitlistEntryOmit<ExtArgs> | null
    /**
     * The data used to create many WaitlistEntries.
     */
    data: WaitlistEntryCreateManyInput | WaitlistEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WaitlistEntry update
   */
  export type WaitlistEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaitlistEntry
     */
    select?: WaitlistEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaitlistEntry
     */
    omit?: WaitlistEntryOmit<ExtArgs> | null
    /**
     * The data needed to update a WaitlistEntry.
     */
    data: XOR<WaitlistEntryUpdateInput, WaitlistEntryUncheckedUpdateInput>
    /**
     * Choose, which WaitlistEntry to update.
     */
    where: WaitlistEntryWhereUniqueInput
  }

  /**
   * WaitlistEntry updateMany
   */
  export type WaitlistEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WaitlistEntries.
     */
    data: XOR<WaitlistEntryUpdateManyMutationInput, WaitlistEntryUncheckedUpdateManyInput>
    /**
     * Filter which WaitlistEntries to update
     */
    where?: WaitlistEntryWhereInput
    /**
     * Limit how many WaitlistEntries to update.
     */
    limit?: number
  }

  /**
   * WaitlistEntry updateManyAndReturn
   */
  export type WaitlistEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaitlistEntry
     */
    select?: WaitlistEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WaitlistEntry
     */
    omit?: WaitlistEntryOmit<ExtArgs> | null
    /**
     * The data used to update WaitlistEntries.
     */
    data: XOR<WaitlistEntryUpdateManyMutationInput, WaitlistEntryUncheckedUpdateManyInput>
    /**
     * Filter which WaitlistEntries to update
     */
    where?: WaitlistEntryWhereInput
    /**
     * Limit how many WaitlistEntries to update.
     */
    limit?: number
  }

  /**
   * WaitlistEntry upsert
   */
  export type WaitlistEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaitlistEntry
     */
    select?: WaitlistEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaitlistEntry
     */
    omit?: WaitlistEntryOmit<ExtArgs> | null
    /**
     * The filter to search for the WaitlistEntry to update in case it exists.
     */
    where: WaitlistEntryWhereUniqueInput
    /**
     * In case the WaitlistEntry found by the `where` argument doesn't exist, create a new WaitlistEntry with this data.
     */
    create: XOR<WaitlistEntryCreateInput, WaitlistEntryUncheckedCreateInput>
    /**
     * In case the WaitlistEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WaitlistEntryUpdateInput, WaitlistEntryUncheckedUpdateInput>
  }

  /**
   * WaitlistEntry delete
   */
  export type WaitlistEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaitlistEntry
     */
    select?: WaitlistEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaitlistEntry
     */
    omit?: WaitlistEntryOmit<ExtArgs> | null
    /**
     * Filter which WaitlistEntry to delete.
     */
    where: WaitlistEntryWhereUniqueInput
  }

  /**
   * WaitlistEntry deleteMany
   */
  export type WaitlistEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WaitlistEntries to delete
     */
    where?: WaitlistEntryWhereInput
    /**
     * Limit how many WaitlistEntries to delete.
     */
    limit?: number
  }

  /**
   * WaitlistEntry without action
   */
  export type WaitlistEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaitlistEntry
     */
    select?: WaitlistEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaitlistEntry
     */
    omit?: WaitlistEntryOmit<ExtArgs> | null
  }


  /**
   * Model Event2
   */

  export type AggregateEvent2 = {
    _count: Event2CountAggregateOutputType | null
    _avg: Event2AvgAggregateOutputType | null
    _sum: Event2SumAggregateOutputType | null
    _min: Event2MinAggregateOutputType | null
    _max: Event2MaxAggregateOutputType | null
  }

  export type Event2AvgAggregateOutputType = {
    age: number | null
  }

  export type Event2SumAggregateOutputType = {
    age: number | null
  }

  export type Event2MinAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    phoneNumber: string | null
    age: number | null
    occupation: $Enums.Jobrole | null
    fitnessLevel: $Enums.FitnessLevel | null
    donePopPilates: $Enums.YesNo | null
    caffeineSensitive: $Enums.CaffeineSensitivity | null
    excitementReason: string | null
    wantsUpdates: $Enums.YesNo | null
    instagramHandle: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Event2MaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    phoneNumber: string | null
    age: number | null
    occupation: $Enums.Jobrole | null
    fitnessLevel: $Enums.FitnessLevel | null
    donePopPilates: $Enums.YesNo | null
    caffeineSensitive: $Enums.CaffeineSensitivity | null
    excitementReason: string | null
    wantsUpdates: $Enums.YesNo | null
    instagramHandle: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Event2CountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    phoneNumber: number
    age: number
    occupation: number
    fitnessLevel: number
    donePopPilates: number
    caffeineSensitive: number
    excitementReason: number
    wantsUpdates: number
    instagramHandle: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Event2AvgAggregateInputType = {
    age?: true
  }

  export type Event2SumAggregateInputType = {
    age?: true
  }

  export type Event2MinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    phoneNumber?: true
    age?: true
    occupation?: true
    fitnessLevel?: true
    donePopPilates?: true
    caffeineSensitive?: true
    excitementReason?: true
    wantsUpdates?: true
    instagramHandle?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Event2MaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    phoneNumber?: true
    age?: true
    occupation?: true
    fitnessLevel?: true
    donePopPilates?: true
    caffeineSensitive?: true
    excitementReason?: true
    wantsUpdates?: true
    instagramHandle?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Event2CountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    phoneNumber?: true
    age?: true
    occupation?: true
    fitnessLevel?: true
    donePopPilates?: true
    caffeineSensitive?: true
    excitementReason?: true
    wantsUpdates?: true
    instagramHandle?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Event2AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event2 to aggregate.
     */
    where?: Event2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Event2s to fetch.
     */
    orderBy?: Event2OrderByWithRelationInput | Event2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Event2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Event2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Event2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Event2s
    **/
    _count?: true | Event2CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Event2AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Event2SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Event2MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Event2MaxAggregateInputType
  }

  export type GetEvent2AggregateType<T extends Event2AggregateArgs> = {
        [P in keyof T & keyof AggregateEvent2]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent2[P]>
      : GetScalarType<T[P], AggregateEvent2[P]>
  }




  export type Event2GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Event2WhereInput
    orderBy?: Event2OrderByWithAggregationInput | Event2OrderByWithAggregationInput[]
    by: Event2ScalarFieldEnum[] | Event2ScalarFieldEnum
    having?: Event2ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Event2CountAggregateInputType | true
    _avg?: Event2AvgAggregateInputType
    _sum?: Event2SumAggregateInputType
    _min?: Event2MinAggregateInputType
    _max?: Event2MaxAggregateInputType
  }

  export type Event2GroupByOutputType = {
    id: string
    fullName: string
    email: string
    phoneNumber: string
    age: number
    occupation: $Enums.Jobrole
    fitnessLevel: $Enums.FitnessLevel
    donePopPilates: $Enums.YesNo
    caffeineSensitive: $Enums.CaffeineSensitivity
    excitementReason: string
    wantsUpdates: $Enums.YesNo
    instagramHandle: string | null
    createdAt: Date
    updatedAt: Date
    _count: Event2CountAggregateOutputType | null
    _avg: Event2AvgAggregateOutputType | null
    _sum: Event2SumAggregateOutputType | null
    _min: Event2MinAggregateOutputType | null
    _max: Event2MaxAggregateOutputType | null
  }

  type GetEvent2GroupByPayload<T extends Event2GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Event2GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Event2GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Event2GroupByOutputType[P]>
            : GetScalarType<T[P], Event2GroupByOutputType[P]>
        }
      >
    >


  export type Event2Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    phoneNumber?: boolean
    age?: boolean
    occupation?: boolean
    fitnessLevel?: boolean
    donePopPilates?: boolean
    caffeineSensitive?: boolean
    excitementReason?: boolean
    wantsUpdates?: boolean
    instagramHandle?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["event2"]>

  export type Event2SelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    phoneNumber?: boolean
    age?: boolean
    occupation?: boolean
    fitnessLevel?: boolean
    donePopPilates?: boolean
    caffeineSensitive?: boolean
    excitementReason?: boolean
    wantsUpdates?: boolean
    instagramHandle?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["event2"]>

  export type Event2SelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    phoneNumber?: boolean
    age?: boolean
    occupation?: boolean
    fitnessLevel?: boolean
    donePopPilates?: boolean
    caffeineSensitive?: boolean
    excitementReason?: boolean
    wantsUpdates?: boolean
    instagramHandle?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["event2"]>

  export type Event2SelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    phoneNumber?: boolean
    age?: boolean
    occupation?: boolean
    fitnessLevel?: boolean
    donePopPilates?: boolean
    caffeineSensitive?: boolean
    excitementReason?: boolean
    wantsUpdates?: boolean
    instagramHandle?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type Event2Omit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "email" | "phoneNumber" | "age" | "occupation" | "fitnessLevel" | "donePopPilates" | "caffeineSensitive" | "excitementReason" | "wantsUpdates" | "instagramHandle" | "createdAt" | "updatedAt", ExtArgs["result"]["event2"]>

  export type $Event2Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event2"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      email: string
      phoneNumber: string
      age: number
      occupation: $Enums.Jobrole
      fitnessLevel: $Enums.FitnessLevel
      donePopPilates: $Enums.YesNo
      caffeineSensitive: $Enums.CaffeineSensitivity
      excitementReason: string
      wantsUpdates: $Enums.YesNo
      instagramHandle: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["event2"]>
    composites: {}
  }

  type Event2GetPayload<S extends boolean | null | undefined | Event2DefaultArgs> = $Result.GetResult<Prisma.$Event2Payload, S>

  type Event2CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Event2FindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Event2CountAggregateInputType | true
    }

  export interface Event2Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event2'], meta: { name: 'Event2' } }
    /**
     * Find zero or one Event2 that matches the filter.
     * @param {Event2FindUniqueArgs} args - Arguments to find a Event2
     * @example
     * // Get one Event2
     * const event2 = await prisma.event2.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Event2FindUniqueArgs>(args: SelectSubset<T, Event2FindUniqueArgs<ExtArgs>>): Prisma__Event2Client<$Result.GetResult<Prisma.$Event2Payload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event2 that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Event2FindUniqueOrThrowArgs} args - Arguments to find a Event2
     * @example
     * // Get one Event2
     * const event2 = await prisma.event2.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Event2FindUniqueOrThrowArgs>(args: SelectSubset<T, Event2FindUniqueOrThrowArgs<ExtArgs>>): Prisma__Event2Client<$Result.GetResult<Prisma.$Event2Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event2 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Event2FindFirstArgs} args - Arguments to find a Event2
     * @example
     * // Get one Event2
     * const event2 = await prisma.event2.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Event2FindFirstArgs>(args?: SelectSubset<T, Event2FindFirstArgs<ExtArgs>>): Prisma__Event2Client<$Result.GetResult<Prisma.$Event2Payload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event2 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Event2FindFirstOrThrowArgs} args - Arguments to find a Event2
     * @example
     * // Get one Event2
     * const event2 = await prisma.event2.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Event2FindFirstOrThrowArgs>(args?: SelectSubset<T, Event2FindFirstOrThrowArgs<ExtArgs>>): Prisma__Event2Client<$Result.GetResult<Prisma.$Event2Payload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Event2s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Event2FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Event2s
     * const event2s = await prisma.event2.findMany()
     * 
     * // Get first 10 Event2s
     * const event2s = await prisma.event2.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const event2WithIdOnly = await prisma.event2.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Event2FindManyArgs>(args?: SelectSubset<T, Event2FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Event2Payload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event2.
     * @param {Event2CreateArgs} args - Arguments to create a Event2.
     * @example
     * // Create one Event2
     * const Event2 = await prisma.event2.create({
     *   data: {
     *     // ... data to create a Event2
     *   }
     * })
     * 
     */
    create<T extends Event2CreateArgs>(args: SelectSubset<T, Event2CreateArgs<ExtArgs>>): Prisma__Event2Client<$Result.GetResult<Prisma.$Event2Payload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Event2s.
     * @param {Event2CreateManyArgs} args - Arguments to create many Event2s.
     * @example
     * // Create many Event2s
     * const event2 = await prisma.event2.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Event2CreateManyArgs>(args?: SelectSubset<T, Event2CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Event2s and returns the data saved in the database.
     * @param {Event2CreateManyAndReturnArgs} args - Arguments to create many Event2s.
     * @example
     * // Create many Event2s
     * const event2 = await prisma.event2.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Event2s and only return the `id`
     * const event2WithIdOnly = await prisma.event2.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Event2CreateManyAndReturnArgs>(args?: SelectSubset<T, Event2CreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Event2Payload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event2.
     * @param {Event2DeleteArgs} args - Arguments to delete one Event2.
     * @example
     * // Delete one Event2
     * const Event2 = await prisma.event2.delete({
     *   where: {
     *     // ... filter to delete one Event2
     *   }
     * })
     * 
     */
    delete<T extends Event2DeleteArgs>(args: SelectSubset<T, Event2DeleteArgs<ExtArgs>>): Prisma__Event2Client<$Result.GetResult<Prisma.$Event2Payload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event2.
     * @param {Event2UpdateArgs} args - Arguments to update one Event2.
     * @example
     * // Update one Event2
     * const event2 = await prisma.event2.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Event2UpdateArgs>(args: SelectSubset<T, Event2UpdateArgs<ExtArgs>>): Prisma__Event2Client<$Result.GetResult<Prisma.$Event2Payload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Event2s.
     * @param {Event2DeleteManyArgs} args - Arguments to filter Event2s to delete.
     * @example
     * // Delete a few Event2s
     * const { count } = await prisma.event2.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Event2DeleteManyArgs>(args?: SelectSubset<T, Event2DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Event2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Event2UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Event2s
     * const event2 = await prisma.event2.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Event2UpdateManyArgs>(args: SelectSubset<T, Event2UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Event2s and returns the data updated in the database.
     * @param {Event2UpdateManyAndReturnArgs} args - Arguments to update many Event2s.
     * @example
     * // Update many Event2s
     * const event2 = await prisma.event2.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Event2s and only return the `id`
     * const event2WithIdOnly = await prisma.event2.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Event2UpdateManyAndReturnArgs>(args: SelectSubset<T, Event2UpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Event2Payload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event2.
     * @param {Event2UpsertArgs} args - Arguments to update or create a Event2.
     * @example
     * // Update or create a Event2
     * const event2 = await prisma.event2.upsert({
     *   create: {
     *     // ... data to create a Event2
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event2 we want to update
     *   }
     * })
     */
    upsert<T extends Event2UpsertArgs>(args: SelectSubset<T, Event2UpsertArgs<ExtArgs>>): Prisma__Event2Client<$Result.GetResult<Prisma.$Event2Payload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Event2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Event2CountArgs} args - Arguments to filter Event2s to count.
     * @example
     * // Count the number of Event2s
     * const count = await prisma.event2.count({
     *   where: {
     *     // ... the filter for the Event2s we want to count
     *   }
     * })
    **/
    count<T extends Event2CountArgs>(
      args?: Subset<T, Event2CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Event2CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Event2AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Event2AggregateArgs>(args: Subset<T, Event2AggregateArgs>): Prisma.PrismaPromise<GetEvent2AggregateType<T>>

    /**
     * Group by Event2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Event2GroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Event2GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Event2GroupByArgs['orderBy'] }
        : { orderBy?: Event2GroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Event2GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvent2GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event2 model
   */
  readonly fields: Event2FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event2.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Event2Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event2 model
   */
  interface Event2FieldRefs {
    readonly id: FieldRef<"Event2", 'String'>
    readonly fullName: FieldRef<"Event2", 'String'>
    readonly email: FieldRef<"Event2", 'String'>
    readonly phoneNumber: FieldRef<"Event2", 'String'>
    readonly age: FieldRef<"Event2", 'Int'>
    readonly occupation: FieldRef<"Event2", 'Jobrole'>
    readonly fitnessLevel: FieldRef<"Event2", 'FitnessLevel'>
    readonly donePopPilates: FieldRef<"Event2", 'YesNo'>
    readonly caffeineSensitive: FieldRef<"Event2", 'CaffeineSensitivity'>
    readonly excitementReason: FieldRef<"Event2", 'String'>
    readonly wantsUpdates: FieldRef<"Event2", 'YesNo'>
    readonly instagramHandle: FieldRef<"Event2", 'String'>
    readonly createdAt: FieldRef<"Event2", 'DateTime'>
    readonly updatedAt: FieldRef<"Event2", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event2 findUnique
   */
  export type Event2FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event2
     */
    select?: Event2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Event2
     */
    omit?: Event2Omit<ExtArgs> | null
    /**
     * Filter, which Event2 to fetch.
     */
    where: Event2WhereUniqueInput
  }

  /**
   * Event2 findUniqueOrThrow
   */
  export type Event2FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event2
     */
    select?: Event2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Event2
     */
    omit?: Event2Omit<ExtArgs> | null
    /**
     * Filter, which Event2 to fetch.
     */
    where: Event2WhereUniqueInput
  }

  /**
   * Event2 findFirst
   */
  export type Event2FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event2
     */
    select?: Event2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Event2
     */
    omit?: Event2Omit<ExtArgs> | null
    /**
     * Filter, which Event2 to fetch.
     */
    where?: Event2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Event2s to fetch.
     */
    orderBy?: Event2OrderByWithRelationInput | Event2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Event2s.
     */
    cursor?: Event2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Event2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Event2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Event2s.
     */
    distinct?: Event2ScalarFieldEnum | Event2ScalarFieldEnum[]
  }

  /**
   * Event2 findFirstOrThrow
   */
  export type Event2FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event2
     */
    select?: Event2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Event2
     */
    omit?: Event2Omit<ExtArgs> | null
    /**
     * Filter, which Event2 to fetch.
     */
    where?: Event2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Event2s to fetch.
     */
    orderBy?: Event2OrderByWithRelationInput | Event2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Event2s.
     */
    cursor?: Event2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Event2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Event2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Event2s.
     */
    distinct?: Event2ScalarFieldEnum | Event2ScalarFieldEnum[]
  }

  /**
   * Event2 findMany
   */
  export type Event2FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event2
     */
    select?: Event2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Event2
     */
    omit?: Event2Omit<ExtArgs> | null
    /**
     * Filter, which Event2s to fetch.
     */
    where?: Event2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Event2s to fetch.
     */
    orderBy?: Event2OrderByWithRelationInput | Event2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Event2s.
     */
    cursor?: Event2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Event2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Event2s.
     */
    skip?: number
    distinct?: Event2ScalarFieldEnum | Event2ScalarFieldEnum[]
  }

  /**
   * Event2 create
   */
  export type Event2CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event2
     */
    select?: Event2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Event2
     */
    omit?: Event2Omit<ExtArgs> | null
    /**
     * The data needed to create a Event2.
     */
    data: XOR<Event2CreateInput, Event2UncheckedCreateInput>
  }

  /**
   * Event2 createMany
   */
  export type Event2CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Event2s.
     */
    data: Event2CreateManyInput | Event2CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event2 createManyAndReturn
   */
  export type Event2CreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event2
     */
    select?: Event2SelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event2
     */
    omit?: Event2Omit<ExtArgs> | null
    /**
     * The data used to create many Event2s.
     */
    data: Event2CreateManyInput | Event2CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event2 update
   */
  export type Event2UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event2
     */
    select?: Event2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Event2
     */
    omit?: Event2Omit<ExtArgs> | null
    /**
     * The data needed to update a Event2.
     */
    data: XOR<Event2UpdateInput, Event2UncheckedUpdateInput>
    /**
     * Choose, which Event2 to update.
     */
    where: Event2WhereUniqueInput
  }

  /**
   * Event2 updateMany
   */
  export type Event2UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Event2s.
     */
    data: XOR<Event2UpdateManyMutationInput, Event2UncheckedUpdateManyInput>
    /**
     * Filter which Event2s to update
     */
    where?: Event2WhereInput
    /**
     * Limit how many Event2s to update.
     */
    limit?: number
  }

  /**
   * Event2 updateManyAndReturn
   */
  export type Event2UpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event2
     */
    select?: Event2SelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event2
     */
    omit?: Event2Omit<ExtArgs> | null
    /**
     * The data used to update Event2s.
     */
    data: XOR<Event2UpdateManyMutationInput, Event2UncheckedUpdateManyInput>
    /**
     * Filter which Event2s to update
     */
    where?: Event2WhereInput
    /**
     * Limit how many Event2s to update.
     */
    limit?: number
  }

  /**
   * Event2 upsert
   */
  export type Event2UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event2
     */
    select?: Event2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Event2
     */
    omit?: Event2Omit<ExtArgs> | null
    /**
     * The filter to search for the Event2 to update in case it exists.
     */
    where: Event2WhereUniqueInput
    /**
     * In case the Event2 found by the `where` argument doesn't exist, create a new Event2 with this data.
     */
    create: XOR<Event2CreateInput, Event2UncheckedCreateInput>
    /**
     * In case the Event2 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Event2UpdateInput, Event2UncheckedUpdateInput>
  }

  /**
   * Event2 delete
   */
  export type Event2DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event2
     */
    select?: Event2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Event2
     */
    omit?: Event2Omit<ExtArgs> | null
    /**
     * Filter which Event2 to delete.
     */
    where: Event2WhereUniqueInput
  }

  /**
   * Event2 deleteMany
   */
  export type Event2DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event2s to delete
     */
    where?: Event2WhereInput
    /**
     * Limit how many Event2s to delete.
     */
    limit?: number
  }

  /**
   * Event2 without action
   */
  export type Event2DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event2
     */
    select?: Event2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Event2
     */
    omit?: Event2Omit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const WaitlistEntryScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    email: 'email',
    phoneNumber: 'phoneNumber',
    age: 'age',
    occupation: 'occupation',
    soundHealingExp: 'soundHealingExp',
    waterComfort: 'waterComfort',
    preferredSession: 'preferredSession',
    futureJourney: 'futureJourney',
    instagramHandle: 'instagramHandle',
    createdAt: 'createdAt'
  };

  export type WaitlistEntryScalarFieldEnum = (typeof WaitlistEntryScalarFieldEnum)[keyof typeof WaitlistEntryScalarFieldEnum]


  export const Event2ScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    email: 'email',
    phoneNumber: 'phoneNumber',
    age: 'age',
    occupation: 'occupation',
    fitnessLevel: 'fitnessLevel',
    donePopPilates: 'donePopPilates',
    caffeineSensitive: 'caffeineSensitive',
    excitementReason: 'excitementReason',
    wantsUpdates: 'wantsUpdates',
    instagramHandle: 'instagramHandle',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Event2ScalarFieldEnum = (typeof Event2ScalarFieldEnum)[keyof typeof Event2ScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Occupation'
   */
  export type EnumOccupationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Occupation'>
    


  /**
   * Reference to a field of type 'Occupation[]'
   */
  export type ListEnumOccupationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Occupation[]'>
    


  /**
   * Reference to a field of type 'SoundHealingExperience'
   */
  export type EnumSoundHealingExperienceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SoundHealingExperience'>
    


  /**
   * Reference to a field of type 'SoundHealingExperience[]'
   */
  export type ListEnumSoundHealingExperienceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SoundHealingExperience[]'>
    


  /**
   * Reference to a field of type 'WaterComfort'
   */
  export type EnumWaterComfortFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WaterComfort'>
    


  /**
   * Reference to a field of type 'WaterComfort[]'
   */
  export type ListEnumWaterComfortFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WaterComfort[]'>
    


  /**
   * Reference to a field of type 'PreferredSession'
   */
  export type EnumPreferredSessionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PreferredSession'>
    


  /**
   * Reference to a field of type 'PreferredSession[]'
   */
  export type ListEnumPreferredSessionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PreferredSession[]'>
    


  /**
   * Reference to a field of type 'FutureJourney'
   */
  export type EnumFutureJourneyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FutureJourney'>
    


  /**
   * Reference to a field of type 'FutureJourney[]'
   */
  export type ListEnumFutureJourneyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FutureJourney[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Jobrole'
   */
  export type EnumJobroleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Jobrole'>
    


  /**
   * Reference to a field of type 'Jobrole[]'
   */
  export type ListEnumJobroleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Jobrole[]'>
    


  /**
   * Reference to a field of type 'FitnessLevel'
   */
  export type EnumFitnessLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FitnessLevel'>
    


  /**
   * Reference to a field of type 'FitnessLevel[]'
   */
  export type ListEnumFitnessLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FitnessLevel[]'>
    


  /**
   * Reference to a field of type 'YesNo'
   */
  export type EnumYesNoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'YesNo'>
    


  /**
   * Reference to a field of type 'YesNo[]'
   */
  export type ListEnumYesNoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'YesNo[]'>
    


  /**
   * Reference to a field of type 'CaffeineSensitivity'
   */
  export type EnumCaffeineSensitivityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CaffeineSensitivity'>
    


  /**
   * Reference to a field of type 'CaffeineSensitivity[]'
   */
  export type ListEnumCaffeineSensitivityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CaffeineSensitivity[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type WaitlistEntryWhereInput = {
    AND?: WaitlistEntryWhereInput | WaitlistEntryWhereInput[]
    OR?: WaitlistEntryWhereInput[]
    NOT?: WaitlistEntryWhereInput | WaitlistEntryWhereInput[]
    id?: IntFilter<"WaitlistEntry"> | number
    fullName?: StringFilter<"WaitlistEntry"> | string
    email?: StringFilter<"WaitlistEntry"> | string
    phoneNumber?: StringNullableFilter<"WaitlistEntry"> | string | null
    age?: IntNullableFilter<"WaitlistEntry"> | number | null
    occupation?: EnumOccupationFilter<"WaitlistEntry"> | $Enums.Occupation
    soundHealingExp?: EnumSoundHealingExperienceFilter<"WaitlistEntry"> | $Enums.SoundHealingExperience
    waterComfort?: EnumWaterComfortFilter<"WaitlistEntry"> | $Enums.WaterComfort
    preferredSession?: EnumPreferredSessionFilter<"WaitlistEntry"> | $Enums.PreferredSession
    futureJourney?: EnumFutureJourneyFilter<"WaitlistEntry"> | $Enums.FutureJourney
    instagramHandle?: StringNullableFilter<"WaitlistEntry"> | string | null
    createdAt?: DateTimeFilter<"WaitlistEntry"> | Date | string
  }

  export type WaitlistEntryOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    occupation?: SortOrder
    soundHealingExp?: SortOrder
    waterComfort?: SortOrder
    preferredSession?: SortOrder
    futureJourney?: SortOrder
    instagramHandle?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type WaitlistEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: WaitlistEntryWhereInput | WaitlistEntryWhereInput[]
    OR?: WaitlistEntryWhereInput[]
    NOT?: WaitlistEntryWhereInput | WaitlistEntryWhereInput[]
    fullName?: StringFilter<"WaitlistEntry"> | string
    phoneNumber?: StringNullableFilter<"WaitlistEntry"> | string | null
    age?: IntNullableFilter<"WaitlistEntry"> | number | null
    occupation?: EnumOccupationFilter<"WaitlistEntry"> | $Enums.Occupation
    soundHealingExp?: EnumSoundHealingExperienceFilter<"WaitlistEntry"> | $Enums.SoundHealingExperience
    waterComfort?: EnumWaterComfortFilter<"WaitlistEntry"> | $Enums.WaterComfort
    preferredSession?: EnumPreferredSessionFilter<"WaitlistEntry"> | $Enums.PreferredSession
    futureJourney?: EnumFutureJourneyFilter<"WaitlistEntry"> | $Enums.FutureJourney
    instagramHandle?: StringNullableFilter<"WaitlistEntry"> | string | null
    createdAt?: DateTimeFilter<"WaitlistEntry"> | Date | string
  }, "id" | "email">

  export type WaitlistEntryOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    occupation?: SortOrder
    soundHealingExp?: SortOrder
    waterComfort?: SortOrder
    preferredSession?: SortOrder
    futureJourney?: SortOrder
    instagramHandle?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: WaitlistEntryCountOrderByAggregateInput
    _avg?: WaitlistEntryAvgOrderByAggregateInput
    _max?: WaitlistEntryMaxOrderByAggregateInput
    _min?: WaitlistEntryMinOrderByAggregateInput
    _sum?: WaitlistEntrySumOrderByAggregateInput
  }

  export type WaitlistEntryScalarWhereWithAggregatesInput = {
    AND?: WaitlistEntryScalarWhereWithAggregatesInput | WaitlistEntryScalarWhereWithAggregatesInput[]
    OR?: WaitlistEntryScalarWhereWithAggregatesInput[]
    NOT?: WaitlistEntryScalarWhereWithAggregatesInput | WaitlistEntryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WaitlistEntry"> | number
    fullName?: StringWithAggregatesFilter<"WaitlistEntry"> | string
    email?: StringWithAggregatesFilter<"WaitlistEntry"> | string
    phoneNumber?: StringNullableWithAggregatesFilter<"WaitlistEntry"> | string | null
    age?: IntNullableWithAggregatesFilter<"WaitlistEntry"> | number | null
    occupation?: EnumOccupationWithAggregatesFilter<"WaitlistEntry"> | $Enums.Occupation
    soundHealingExp?: EnumSoundHealingExperienceWithAggregatesFilter<"WaitlistEntry"> | $Enums.SoundHealingExperience
    waterComfort?: EnumWaterComfortWithAggregatesFilter<"WaitlistEntry"> | $Enums.WaterComfort
    preferredSession?: EnumPreferredSessionWithAggregatesFilter<"WaitlistEntry"> | $Enums.PreferredSession
    futureJourney?: EnumFutureJourneyWithAggregatesFilter<"WaitlistEntry"> | $Enums.FutureJourney
    instagramHandle?: StringNullableWithAggregatesFilter<"WaitlistEntry"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WaitlistEntry"> | Date | string
  }

  export type Event2WhereInput = {
    AND?: Event2WhereInput | Event2WhereInput[]
    OR?: Event2WhereInput[]
    NOT?: Event2WhereInput | Event2WhereInput[]
    id?: StringFilter<"Event2"> | string
    fullName?: StringFilter<"Event2"> | string
    email?: StringFilter<"Event2"> | string
    phoneNumber?: StringFilter<"Event2"> | string
    age?: IntFilter<"Event2"> | number
    occupation?: EnumJobroleFilter<"Event2"> | $Enums.Jobrole
    fitnessLevel?: EnumFitnessLevelFilter<"Event2"> | $Enums.FitnessLevel
    donePopPilates?: EnumYesNoFilter<"Event2"> | $Enums.YesNo
    caffeineSensitive?: EnumCaffeineSensitivityFilter<"Event2"> | $Enums.CaffeineSensitivity
    excitementReason?: StringFilter<"Event2"> | string
    wantsUpdates?: EnumYesNoFilter<"Event2"> | $Enums.YesNo
    instagramHandle?: StringNullableFilter<"Event2"> | string | null
    createdAt?: DateTimeFilter<"Event2"> | Date | string
    updatedAt?: DateTimeFilter<"Event2"> | Date | string
  }

  export type Event2OrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    age?: SortOrder
    occupation?: SortOrder
    fitnessLevel?: SortOrder
    donePopPilates?: SortOrder
    caffeineSensitive?: SortOrder
    excitementReason?: SortOrder
    wantsUpdates?: SortOrder
    instagramHandle?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Event2WhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: Event2WhereInput | Event2WhereInput[]
    OR?: Event2WhereInput[]
    NOT?: Event2WhereInput | Event2WhereInput[]
    fullName?: StringFilter<"Event2"> | string
    phoneNumber?: StringFilter<"Event2"> | string
    age?: IntFilter<"Event2"> | number
    occupation?: EnumJobroleFilter<"Event2"> | $Enums.Jobrole
    fitnessLevel?: EnumFitnessLevelFilter<"Event2"> | $Enums.FitnessLevel
    donePopPilates?: EnumYesNoFilter<"Event2"> | $Enums.YesNo
    caffeineSensitive?: EnumCaffeineSensitivityFilter<"Event2"> | $Enums.CaffeineSensitivity
    excitementReason?: StringFilter<"Event2"> | string
    wantsUpdates?: EnumYesNoFilter<"Event2"> | $Enums.YesNo
    instagramHandle?: StringNullableFilter<"Event2"> | string | null
    createdAt?: DateTimeFilter<"Event2"> | Date | string
    updatedAt?: DateTimeFilter<"Event2"> | Date | string
  }, "id" | "email">

  export type Event2OrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    age?: SortOrder
    occupation?: SortOrder
    fitnessLevel?: SortOrder
    donePopPilates?: SortOrder
    caffeineSensitive?: SortOrder
    excitementReason?: SortOrder
    wantsUpdates?: SortOrder
    instagramHandle?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: Event2CountOrderByAggregateInput
    _avg?: Event2AvgOrderByAggregateInput
    _max?: Event2MaxOrderByAggregateInput
    _min?: Event2MinOrderByAggregateInput
    _sum?: Event2SumOrderByAggregateInput
  }

  export type Event2ScalarWhereWithAggregatesInput = {
    AND?: Event2ScalarWhereWithAggregatesInput | Event2ScalarWhereWithAggregatesInput[]
    OR?: Event2ScalarWhereWithAggregatesInput[]
    NOT?: Event2ScalarWhereWithAggregatesInput | Event2ScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event2"> | string
    fullName?: StringWithAggregatesFilter<"Event2"> | string
    email?: StringWithAggregatesFilter<"Event2"> | string
    phoneNumber?: StringWithAggregatesFilter<"Event2"> | string
    age?: IntWithAggregatesFilter<"Event2"> | number
    occupation?: EnumJobroleWithAggregatesFilter<"Event2"> | $Enums.Jobrole
    fitnessLevel?: EnumFitnessLevelWithAggregatesFilter<"Event2"> | $Enums.FitnessLevel
    donePopPilates?: EnumYesNoWithAggregatesFilter<"Event2"> | $Enums.YesNo
    caffeineSensitive?: EnumCaffeineSensitivityWithAggregatesFilter<"Event2"> | $Enums.CaffeineSensitivity
    excitementReason?: StringWithAggregatesFilter<"Event2"> | string
    wantsUpdates?: EnumYesNoWithAggregatesFilter<"Event2"> | $Enums.YesNo
    instagramHandle?: StringNullableWithAggregatesFilter<"Event2"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Event2"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event2"> | Date | string
  }

  export type WaitlistEntryCreateInput = {
    fullName: string
    email: string
    phoneNumber?: string | null
    age?: number | null
    occupation: $Enums.Occupation
    soundHealingExp: $Enums.SoundHealingExperience
    waterComfort: $Enums.WaterComfort
    preferredSession: $Enums.PreferredSession
    futureJourney: $Enums.FutureJourney
    instagramHandle?: string | null
    createdAt?: Date | string
  }

  export type WaitlistEntryUncheckedCreateInput = {
    id?: number
    fullName: string
    email: string
    phoneNumber?: string | null
    age?: number | null
    occupation: $Enums.Occupation
    soundHealingExp: $Enums.SoundHealingExperience
    waterComfort: $Enums.WaterComfort
    preferredSession: $Enums.PreferredSession
    futureJourney: $Enums.FutureJourney
    instagramHandle?: string | null
    createdAt?: Date | string
  }

  export type WaitlistEntryUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    occupation?: EnumOccupationFieldUpdateOperationsInput | $Enums.Occupation
    soundHealingExp?: EnumSoundHealingExperienceFieldUpdateOperationsInput | $Enums.SoundHealingExperience
    waterComfort?: EnumWaterComfortFieldUpdateOperationsInput | $Enums.WaterComfort
    preferredSession?: EnumPreferredSessionFieldUpdateOperationsInput | $Enums.PreferredSession
    futureJourney?: EnumFutureJourneyFieldUpdateOperationsInput | $Enums.FutureJourney
    instagramHandle?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaitlistEntryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    occupation?: EnumOccupationFieldUpdateOperationsInput | $Enums.Occupation
    soundHealingExp?: EnumSoundHealingExperienceFieldUpdateOperationsInput | $Enums.SoundHealingExperience
    waterComfort?: EnumWaterComfortFieldUpdateOperationsInput | $Enums.WaterComfort
    preferredSession?: EnumPreferredSessionFieldUpdateOperationsInput | $Enums.PreferredSession
    futureJourney?: EnumFutureJourneyFieldUpdateOperationsInput | $Enums.FutureJourney
    instagramHandle?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaitlistEntryCreateManyInput = {
    id?: number
    fullName: string
    email: string
    phoneNumber?: string | null
    age?: number | null
    occupation: $Enums.Occupation
    soundHealingExp: $Enums.SoundHealingExperience
    waterComfort: $Enums.WaterComfort
    preferredSession: $Enums.PreferredSession
    futureJourney: $Enums.FutureJourney
    instagramHandle?: string | null
    createdAt?: Date | string
  }

  export type WaitlistEntryUpdateManyMutationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    occupation?: EnumOccupationFieldUpdateOperationsInput | $Enums.Occupation
    soundHealingExp?: EnumSoundHealingExperienceFieldUpdateOperationsInput | $Enums.SoundHealingExperience
    waterComfort?: EnumWaterComfortFieldUpdateOperationsInput | $Enums.WaterComfort
    preferredSession?: EnumPreferredSessionFieldUpdateOperationsInput | $Enums.PreferredSession
    futureJourney?: EnumFutureJourneyFieldUpdateOperationsInput | $Enums.FutureJourney
    instagramHandle?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaitlistEntryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    occupation?: EnumOccupationFieldUpdateOperationsInput | $Enums.Occupation
    soundHealingExp?: EnumSoundHealingExperienceFieldUpdateOperationsInput | $Enums.SoundHealingExperience
    waterComfort?: EnumWaterComfortFieldUpdateOperationsInput | $Enums.WaterComfort
    preferredSession?: EnumPreferredSessionFieldUpdateOperationsInput | $Enums.PreferredSession
    futureJourney?: EnumFutureJourneyFieldUpdateOperationsInput | $Enums.FutureJourney
    instagramHandle?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Event2CreateInput = {
    id?: string
    fullName: string
    email: string
    phoneNumber: string
    age: number
    occupation: $Enums.Jobrole
    fitnessLevel: $Enums.FitnessLevel
    donePopPilates: $Enums.YesNo
    caffeineSensitive: $Enums.CaffeineSensitivity
    excitementReason: string
    wantsUpdates: $Enums.YesNo
    instagramHandle?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Event2UncheckedCreateInput = {
    id?: string
    fullName: string
    email: string
    phoneNumber: string
    age: number
    occupation: $Enums.Jobrole
    fitnessLevel: $Enums.FitnessLevel
    donePopPilates: $Enums.YesNo
    caffeineSensitive: $Enums.CaffeineSensitivity
    excitementReason: string
    wantsUpdates: $Enums.YesNo
    instagramHandle?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Event2UpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    occupation?: EnumJobroleFieldUpdateOperationsInput | $Enums.Jobrole
    fitnessLevel?: EnumFitnessLevelFieldUpdateOperationsInput | $Enums.FitnessLevel
    donePopPilates?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    caffeineSensitive?: EnumCaffeineSensitivityFieldUpdateOperationsInput | $Enums.CaffeineSensitivity
    excitementReason?: StringFieldUpdateOperationsInput | string
    wantsUpdates?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    instagramHandle?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Event2UncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    occupation?: EnumJobroleFieldUpdateOperationsInput | $Enums.Jobrole
    fitnessLevel?: EnumFitnessLevelFieldUpdateOperationsInput | $Enums.FitnessLevel
    donePopPilates?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    caffeineSensitive?: EnumCaffeineSensitivityFieldUpdateOperationsInput | $Enums.CaffeineSensitivity
    excitementReason?: StringFieldUpdateOperationsInput | string
    wantsUpdates?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    instagramHandle?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Event2CreateManyInput = {
    id?: string
    fullName: string
    email: string
    phoneNumber: string
    age: number
    occupation: $Enums.Jobrole
    fitnessLevel: $Enums.FitnessLevel
    donePopPilates: $Enums.YesNo
    caffeineSensitive: $Enums.CaffeineSensitivity
    excitementReason: string
    wantsUpdates: $Enums.YesNo
    instagramHandle?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Event2UpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    occupation?: EnumJobroleFieldUpdateOperationsInput | $Enums.Jobrole
    fitnessLevel?: EnumFitnessLevelFieldUpdateOperationsInput | $Enums.FitnessLevel
    donePopPilates?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    caffeineSensitive?: EnumCaffeineSensitivityFieldUpdateOperationsInput | $Enums.CaffeineSensitivity
    excitementReason?: StringFieldUpdateOperationsInput | string
    wantsUpdates?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    instagramHandle?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Event2UncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    occupation?: EnumJobroleFieldUpdateOperationsInput | $Enums.Jobrole
    fitnessLevel?: EnumFitnessLevelFieldUpdateOperationsInput | $Enums.FitnessLevel
    donePopPilates?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    caffeineSensitive?: EnumCaffeineSensitivityFieldUpdateOperationsInput | $Enums.CaffeineSensitivity
    excitementReason?: StringFieldUpdateOperationsInput | string
    wantsUpdates?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    instagramHandle?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumOccupationFilter<$PrismaModel = never> = {
    equals?: $Enums.Occupation | EnumOccupationFieldRefInput<$PrismaModel>
    in?: $Enums.Occupation[] | ListEnumOccupationFieldRefInput<$PrismaModel>
    notIn?: $Enums.Occupation[] | ListEnumOccupationFieldRefInput<$PrismaModel>
    not?: NestedEnumOccupationFilter<$PrismaModel> | $Enums.Occupation
  }

  export type EnumSoundHealingExperienceFilter<$PrismaModel = never> = {
    equals?: $Enums.SoundHealingExperience | EnumSoundHealingExperienceFieldRefInput<$PrismaModel>
    in?: $Enums.SoundHealingExperience[] | ListEnumSoundHealingExperienceFieldRefInput<$PrismaModel>
    notIn?: $Enums.SoundHealingExperience[] | ListEnumSoundHealingExperienceFieldRefInput<$PrismaModel>
    not?: NestedEnumSoundHealingExperienceFilter<$PrismaModel> | $Enums.SoundHealingExperience
  }

  export type EnumWaterComfortFilter<$PrismaModel = never> = {
    equals?: $Enums.WaterComfort | EnumWaterComfortFieldRefInput<$PrismaModel>
    in?: $Enums.WaterComfort[] | ListEnumWaterComfortFieldRefInput<$PrismaModel>
    notIn?: $Enums.WaterComfort[] | ListEnumWaterComfortFieldRefInput<$PrismaModel>
    not?: NestedEnumWaterComfortFilter<$PrismaModel> | $Enums.WaterComfort
  }

  export type EnumPreferredSessionFilter<$PrismaModel = never> = {
    equals?: $Enums.PreferredSession | EnumPreferredSessionFieldRefInput<$PrismaModel>
    in?: $Enums.PreferredSession[] | ListEnumPreferredSessionFieldRefInput<$PrismaModel>
    notIn?: $Enums.PreferredSession[] | ListEnumPreferredSessionFieldRefInput<$PrismaModel>
    not?: NestedEnumPreferredSessionFilter<$PrismaModel> | $Enums.PreferredSession
  }

  export type EnumFutureJourneyFilter<$PrismaModel = never> = {
    equals?: $Enums.FutureJourney | EnumFutureJourneyFieldRefInput<$PrismaModel>
    in?: $Enums.FutureJourney[] | ListEnumFutureJourneyFieldRefInput<$PrismaModel>
    notIn?: $Enums.FutureJourney[] | ListEnumFutureJourneyFieldRefInput<$PrismaModel>
    not?: NestedEnumFutureJourneyFilter<$PrismaModel> | $Enums.FutureJourney
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WaitlistEntryCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    age?: SortOrder
    occupation?: SortOrder
    soundHealingExp?: SortOrder
    waterComfort?: SortOrder
    preferredSession?: SortOrder
    futureJourney?: SortOrder
    instagramHandle?: SortOrder
    createdAt?: SortOrder
  }

  export type WaitlistEntryAvgOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
  }

  export type WaitlistEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    age?: SortOrder
    occupation?: SortOrder
    soundHealingExp?: SortOrder
    waterComfort?: SortOrder
    preferredSession?: SortOrder
    futureJourney?: SortOrder
    instagramHandle?: SortOrder
    createdAt?: SortOrder
  }

  export type WaitlistEntryMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    age?: SortOrder
    occupation?: SortOrder
    soundHealingExp?: SortOrder
    waterComfort?: SortOrder
    preferredSession?: SortOrder
    futureJourney?: SortOrder
    instagramHandle?: SortOrder
    createdAt?: SortOrder
  }

  export type WaitlistEntrySumOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumOccupationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Occupation | EnumOccupationFieldRefInput<$PrismaModel>
    in?: $Enums.Occupation[] | ListEnumOccupationFieldRefInput<$PrismaModel>
    notIn?: $Enums.Occupation[] | ListEnumOccupationFieldRefInput<$PrismaModel>
    not?: NestedEnumOccupationWithAggregatesFilter<$PrismaModel> | $Enums.Occupation
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOccupationFilter<$PrismaModel>
    _max?: NestedEnumOccupationFilter<$PrismaModel>
  }

  export type EnumSoundHealingExperienceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SoundHealingExperience | EnumSoundHealingExperienceFieldRefInput<$PrismaModel>
    in?: $Enums.SoundHealingExperience[] | ListEnumSoundHealingExperienceFieldRefInput<$PrismaModel>
    notIn?: $Enums.SoundHealingExperience[] | ListEnumSoundHealingExperienceFieldRefInput<$PrismaModel>
    not?: NestedEnumSoundHealingExperienceWithAggregatesFilter<$PrismaModel> | $Enums.SoundHealingExperience
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSoundHealingExperienceFilter<$PrismaModel>
    _max?: NestedEnumSoundHealingExperienceFilter<$PrismaModel>
  }

  export type EnumWaterComfortWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WaterComfort | EnumWaterComfortFieldRefInput<$PrismaModel>
    in?: $Enums.WaterComfort[] | ListEnumWaterComfortFieldRefInput<$PrismaModel>
    notIn?: $Enums.WaterComfort[] | ListEnumWaterComfortFieldRefInput<$PrismaModel>
    not?: NestedEnumWaterComfortWithAggregatesFilter<$PrismaModel> | $Enums.WaterComfort
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWaterComfortFilter<$PrismaModel>
    _max?: NestedEnumWaterComfortFilter<$PrismaModel>
  }

  export type EnumPreferredSessionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PreferredSession | EnumPreferredSessionFieldRefInput<$PrismaModel>
    in?: $Enums.PreferredSession[] | ListEnumPreferredSessionFieldRefInput<$PrismaModel>
    notIn?: $Enums.PreferredSession[] | ListEnumPreferredSessionFieldRefInput<$PrismaModel>
    not?: NestedEnumPreferredSessionWithAggregatesFilter<$PrismaModel> | $Enums.PreferredSession
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPreferredSessionFilter<$PrismaModel>
    _max?: NestedEnumPreferredSessionFilter<$PrismaModel>
  }

  export type EnumFutureJourneyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FutureJourney | EnumFutureJourneyFieldRefInput<$PrismaModel>
    in?: $Enums.FutureJourney[] | ListEnumFutureJourneyFieldRefInput<$PrismaModel>
    notIn?: $Enums.FutureJourney[] | ListEnumFutureJourneyFieldRefInput<$PrismaModel>
    not?: NestedEnumFutureJourneyWithAggregatesFilter<$PrismaModel> | $Enums.FutureJourney
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFutureJourneyFilter<$PrismaModel>
    _max?: NestedEnumFutureJourneyFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumJobroleFilter<$PrismaModel = never> = {
    equals?: $Enums.Jobrole | EnumJobroleFieldRefInput<$PrismaModel>
    in?: $Enums.Jobrole[] | ListEnumJobroleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Jobrole[] | ListEnumJobroleFieldRefInput<$PrismaModel>
    not?: NestedEnumJobroleFilter<$PrismaModel> | $Enums.Jobrole
  }

  export type EnumFitnessLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.FitnessLevel | EnumFitnessLevelFieldRefInput<$PrismaModel>
    in?: $Enums.FitnessLevel[] | ListEnumFitnessLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.FitnessLevel[] | ListEnumFitnessLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumFitnessLevelFilter<$PrismaModel> | $Enums.FitnessLevel
  }

  export type EnumYesNoFilter<$PrismaModel = never> = {
    equals?: $Enums.YesNo | EnumYesNoFieldRefInput<$PrismaModel>
    in?: $Enums.YesNo[] | ListEnumYesNoFieldRefInput<$PrismaModel>
    notIn?: $Enums.YesNo[] | ListEnumYesNoFieldRefInput<$PrismaModel>
    not?: NestedEnumYesNoFilter<$PrismaModel> | $Enums.YesNo
  }

  export type EnumCaffeineSensitivityFilter<$PrismaModel = never> = {
    equals?: $Enums.CaffeineSensitivity | EnumCaffeineSensitivityFieldRefInput<$PrismaModel>
    in?: $Enums.CaffeineSensitivity[] | ListEnumCaffeineSensitivityFieldRefInput<$PrismaModel>
    notIn?: $Enums.CaffeineSensitivity[] | ListEnumCaffeineSensitivityFieldRefInput<$PrismaModel>
    not?: NestedEnumCaffeineSensitivityFilter<$PrismaModel> | $Enums.CaffeineSensitivity
  }

  export type Event2CountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    age?: SortOrder
    occupation?: SortOrder
    fitnessLevel?: SortOrder
    donePopPilates?: SortOrder
    caffeineSensitive?: SortOrder
    excitementReason?: SortOrder
    wantsUpdates?: SortOrder
    instagramHandle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Event2AvgOrderByAggregateInput = {
    age?: SortOrder
  }

  export type Event2MaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    age?: SortOrder
    occupation?: SortOrder
    fitnessLevel?: SortOrder
    donePopPilates?: SortOrder
    caffeineSensitive?: SortOrder
    excitementReason?: SortOrder
    wantsUpdates?: SortOrder
    instagramHandle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Event2MinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    age?: SortOrder
    occupation?: SortOrder
    fitnessLevel?: SortOrder
    donePopPilates?: SortOrder
    caffeineSensitive?: SortOrder
    excitementReason?: SortOrder
    wantsUpdates?: SortOrder
    instagramHandle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Event2SumOrderByAggregateInput = {
    age?: SortOrder
  }

  export type EnumJobroleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Jobrole | EnumJobroleFieldRefInput<$PrismaModel>
    in?: $Enums.Jobrole[] | ListEnumJobroleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Jobrole[] | ListEnumJobroleFieldRefInput<$PrismaModel>
    not?: NestedEnumJobroleWithAggregatesFilter<$PrismaModel> | $Enums.Jobrole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobroleFilter<$PrismaModel>
    _max?: NestedEnumJobroleFilter<$PrismaModel>
  }

  export type EnumFitnessLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FitnessLevel | EnumFitnessLevelFieldRefInput<$PrismaModel>
    in?: $Enums.FitnessLevel[] | ListEnumFitnessLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.FitnessLevel[] | ListEnumFitnessLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumFitnessLevelWithAggregatesFilter<$PrismaModel> | $Enums.FitnessLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFitnessLevelFilter<$PrismaModel>
    _max?: NestedEnumFitnessLevelFilter<$PrismaModel>
  }

  export type EnumYesNoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.YesNo | EnumYesNoFieldRefInput<$PrismaModel>
    in?: $Enums.YesNo[] | ListEnumYesNoFieldRefInput<$PrismaModel>
    notIn?: $Enums.YesNo[] | ListEnumYesNoFieldRefInput<$PrismaModel>
    not?: NestedEnumYesNoWithAggregatesFilter<$PrismaModel> | $Enums.YesNo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumYesNoFilter<$PrismaModel>
    _max?: NestedEnumYesNoFilter<$PrismaModel>
  }

  export type EnumCaffeineSensitivityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CaffeineSensitivity | EnumCaffeineSensitivityFieldRefInput<$PrismaModel>
    in?: $Enums.CaffeineSensitivity[] | ListEnumCaffeineSensitivityFieldRefInput<$PrismaModel>
    notIn?: $Enums.CaffeineSensitivity[] | ListEnumCaffeineSensitivityFieldRefInput<$PrismaModel>
    not?: NestedEnumCaffeineSensitivityWithAggregatesFilter<$PrismaModel> | $Enums.CaffeineSensitivity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCaffeineSensitivityFilter<$PrismaModel>
    _max?: NestedEnumCaffeineSensitivityFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumOccupationFieldUpdateOperationsInput = {
    set?: $Enums.Occupation
  }

  export type EnumSoundHealingExperienceFieldUpdateOperationsInput = {
    set?: $Enums.SoundHealingExperience
  }

  export type EnumWaterComfortFieldUpdateOperationsInput = {
    set?: $Enums.WaterComfort
  }

  export type EnumPreferredSessionFieldUpdateOperationsInput = {
    set?: $Enums.PreferredSession
  }

  export type EnumFutureJourneyFieldUpdateOperationsInput = {
    set?: $Enums.FutureJourney
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumJobroleFieldUpdateOperationsInput = {
    set?: $Enums.Jobrole
  }

  export type EnumFitnessLevelFieldUpdateOperationsInput = {
    set?: $Enums.FitnessLevel
  }

  export type EnumYesNoFieldUpdateOperationsInput = {
    set?: $Enums.YesNo
  }

  export type EnumCaffeineSensitivityFieldUpdateOperationsInput = {
    set?: $Enums.CaffeineSensitivity
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumOccupationFilter<$PrismaModel = never> = {
    equals?: $Enums.Occupation | EnumOccupationFieldRefInput<$PrismaModel>
    in?: $Enums.Occupation[] | ListEnumOccupationFieldRefInput<$PrismaModel>
    notIn?: $Enums.Occupation[] | ListEnumOccupationFieldRefInput<$PrismaModel>
    not?: NestedEnumOccupationFilter<$PrismaModel> | $Enums.Occupation
  }

  export type NestedEnumSoundHealingExperienceFilter<$PrismaModel = never> = {
    equals?: $Enums.SoundHealingExperience | EnumSoundHealingExperienceFieldRefInput<$PrismaModel>
    in?: $Enums.SoundHealingExperience[] | ListEnumSoundHealingExperienceFieldRefInput<$PrismaModel>
    notIn?: $Enums.SoundHealingExperience[] | ListEnumSoundHealingExperienceFieldRefInput<$PrismaModel>
    not?: NestedEnumSoundHealingExperienceFilter<$PrismaModel> | $Enums.SoundHealingExperience
  }

  export type NestedEnumWaterComfortFilter<$PrismaModel = never> = {
    equals?: $Enums.WaterComfort | EnumWaterComfortFieldRefInput<$PrismaModel>
    in?: $Enums.WaterComfort[] | ListEnumWaterComfortFieldRefInput<$PrismaModel>
    notIn?: $Enums.WaterComfort[] | ListEnumWaterComfortFieldRefInput<$PrismaModel>
    not?: NestedEnumWaterComfortFilter<$PrismaModel> | $Enums.WaterComfort
  }

  export type NestedEnumPreferredSessionFilter<$PrismaModel = never> = {
    equals?: $Enums.PreferredSession | EnumPreferredSessionFieldRefInput<$PrismaModel>
    in?: $Enums.PreferredSession[] | ListEnumPreferredSessionFieldRefInput<$PrismaModel>
    notIn?: $Enums.PreferredSession[] | ListEnumPreferredSessionFieldRefInput<$PrismaModel>
    not?: NestedEnumPreferredSessionFilter<$PrismaModel> | $Enums.PreferredSession
  }

  export type NestedEnumFutureJourneyFilter<$PrismaModel = never> = {
    equals?: $Enums.FutureJourney | EnumFutureJourneyFieldRefInput<$PrismaModel>
    in?: $Enums.FutureJourney[] | ListEnumFutureJourneyFieldRefInput<$PrismaModel>
    notIn?: $Enums.FutureJourney[] | ListEnumFutureJourneyFieldRefInput<$PrismaModel>
    not?: NestedEnumFutureJourneyFilter<$PrismaModel> | $Enums.FutureJourney
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumOccupationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Occupation | EnumOccupationFieldRefInput<$PrismaModel>
    in?: $Enums.Occupation[] | ListEnumOccupationFieldRefInput<$PrismaModel>
    notIn?: $Enums.Occupation[] | ListEnumOccupationFieldRefInput<$PrismaModel>
    not?: NestedEnumOccupationWithAggregatesFilter<$PrismaModel> | $Enums.Occupation
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOccupationFilter<$PrismaModel>
    _max?: NestedEnumOccupationFilter<$PrismaModel>
  }

  export type NestedEnumSoundHealingExperienceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SoundHealingExperience | EnumSoundHealingExperienceFieldRefInput<$PrismaModel>
    in?: $Enums.SoundHealingExperience[] | ListEnumSoundHealingExperienceFieldRefInput<$PrismaModel>
    notIn?: $Enums.SoundHealingExperience[] | ListEnumSoundHealingExperienceFieldRefInput<$PrismaModel>
    not?: NestedEnumSoundHealingExperienceWithAggregatesFilter<$PrismaModel> | $Enums.SoundHealingExperience
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSoundHealingExperienceFilter<$PrismaModel>
    _max?: NestedEnumSoundHealingExperienceFilter<$PrismaModel>
  }

  export type NestedEnumWaterComfortWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WaterComfort | EnumWaterComfortFieldRefInput<$PrismaModel>
    in?: $Enums.WaterComfort[] | ListEnumWaterComfortFieldRefInput<$PrismaModel>
    notIn?: $Enums.WaterComfort[] | ListEnumWaterComfortFieldRefInput<$PrismaModel>
    not?: NestedEnumWaterComfortWithAggregatesFilter<$PrismaModel> | $Enums.WaterComfort
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWaterComfortFilter<$PrismaModel>
    _max?: NestedEnumWaterComfortFilter<$PrismaModel>
  }

  export type NestedEnumPreferredSessionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PreferredSession | EnumPreferredSessionFieldRefInput<$PrismaModel>
    in?: $Enums.PreferredSession[] | ListEnumPreferredSessionFieldRefInput<$PrismaModel>
    notIn?: $Enums.PreferredSession[] | ListEnumPreferredSessionFieldRefInput<$PrismaModel>
    not?: NestedEnumPreferredSessionWithAggregatesFilter<$PrismaModel> | $Enums.PreferredSession
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPreferredSessionFilter<$PrismaModel>
    _max?: NestedEnumPreferredSessionFilter<$PrismaModel>
  }

  export type NestedEnumFutureJourneyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FutureJourney | EnumFutureJourneyFieldRefInput<$PrismaModel>
    in?: $Enums.FutureJourney[] | ListEnumFutureJourneyFieldRefInput<$PrismaModel>
    notIn?: $Enums.FutureJourney[] | ListEnumFutureJourneyFieldRefInput<$PrismaModel>
    not?: NestedEnumFutureJourneyWithAggregatesFilter<$PrismaModel> | $Enums.FutureJourney
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFutureJourneyFilter<$PrismaModel>
    _max?: NestedEnumFutureJourneyFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumJobroleFilter<$PrismaModel = never> = {
    equals?: $Enums.Jobrole | EnumJobroleFieldRefInput<$PrismaModel>
    in?: $Enums.Jobrole[] | ListEnumJobroleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Jobrole[] | ListEnumJobroleFieldRefInput<$PrismaModel>
    not?: NestedEnumJobroleFilter<$PrismaModel> | $Enums.Jobrole
  }

  export type NestedEnumFitnessLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.FitnessLevel | EnumFitnessLevelFieldRefInput<$PrismaModel>
    in?: $Enums.FitnessLevel[] | ListEnumFitnessLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.FitnessLevel[] | ListEnumFitnessLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumFitnessLevelFilter<$PrismaModel> | $Enums.FitnessLevel
  }

  export type NestedEnumYesNoFilter<$PrismaModel = never> = {
    equals?: $Enums.YesNo | EnumYesNoFieldRefInput<$PrismaModel>
    in?: $Enums.YesNo[] | ListEnumYesNoFieldRefInput<$PrismaModel>
    notIn?: $Enums.YesNo[] | ListEnumYesNoFieldRefInput<$PrismaModel>
    not?: NestedEnumYesNoFilter<$PrismaModel> | $Enums.YesNo
  }

  export type NestedEnumCaffeineSensitivityFilter<$PrismaModel = never> = {
    equals?: $Enums.CaffeineSensitivity | EnumCaffeineSensitivityFieldRefInput<$PrismaModel>
    in?: $Enums.CaffeineSensitivity[] | ListEnumCaffeineSensitivityFieldRefInput<$PrismaModel>
    notIn?: $Enums.CaffeineSensitivity[] | ListEnumCaffeineSensitivityFieldRefInput<$PrismaModel>
    not?: NestedEnumCaffeineSensitivityFilter<$PrismaModel> | $Enums.CaffeineSensitivity
  }

  export type NestedEnumJobroleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Jobrole | EnumJobroleFieldRefInput<$PrismaModel>
    in?: $Enums.Jobrole[] | ListEnumJobroleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Jobrole[] | ListEnumJobroleFieldRefInput<$PrismaModel>
    not?: NestedEnumJobroleWithAggregatesFilter<$PrismaModel> | $Enums.Jobrole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobroleFilter<$PrismaModel>
    _max?: NestedEnumJobroleFilter<$PrismaModel>
  }

  export type NestedEnumFitnessLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FitnessLevel | EnumFitnessLevelFieldRefInput<$PrismaModel>
    in?: $Enums.FitnessLevel[] | ListEnumFitnessLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.FitnessLevel[] | ListEnumFitnessLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumFitnessLevelWithAggregatesFilter<$PrismaModel> | $Enums.FitnessLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFitnessLevelFilter<$PrismaModel>
    _max?: NestedEnumFitnessLevelFilter<$PrismaModel>
  }

  export type NestedEnumYesNoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.YesNo | EnumYesNoFieldRefInput<$PrismaModel>
    in?: $Enums.YesNo[] | ListEnumYesNoFieldRefInput<$PrismaModel>
    notIn?: $Enums.YesNo[] | ListEnumYesNoFieldRefInput<$PrismaModel>
    not?: NestedEnumYesNoWithAggregatesFilter<$PrismaModel> | $Enums.YesNo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumYesNoFilter<$PrismaModel>
    _max?: NestedEnumYesNoFilter<$PrismaModel>
  }

  export type NestedEnumCaffeineSensitivityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CaffeineSensitivity | EnumCaffeineSensitivityFieldRefInput<$PrismaModel>
    in?: $Enums.CaffeineSensitivity[] | ListEnumCaffeineSensitivityFieldRefInput<$PrismaModel>
    notIn?: $Enums.CaffeineSensitivity[] | ListEnumCaffeineSensitivityFieldRefInput<$PrismaModel>
    not?: NestedEnumCaffeineSensitivityWithAggregatesFilter<$PrismaModel> | $Enums.CaffeineSensitivity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCaffeineSensitivityFilter<$PrismaModel>
    _max?: NestedEnumCaffeineSensitivityFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}

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
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Services
 * 
 */
export type Services = $Result.DefaultSelection<Prisma.$ServicesPayload>
/**
 * Model Contain
 * 
 */
export type Contain = $Result.DefaultSelection<Prisma.$ContainPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
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
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.services`: Exposes CRUD operations for the **Services** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.services.findMany()
    * ```
    */
  get services(): Prisma.ServicesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contain`: Exposes CRUD operations for the **Contain** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contains
    * const contains = await prisma.contain.findMany()
    * ```
    */
  get contain(): Prisma.ContainDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Users: 'Users',
    Services: 'Services',
    Contain: 'Contain'
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
      modelProps: "users" | "services" | "contain"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Services: {
        payload: Prisma.$ServicesPayload<ExtArgs>
        fields: Prisma.ServicesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServicesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServicesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>
          }
          findFirst: {
            args: Prisma.ServicesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServicesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>
          }
          findMany: {
            args: Prisma.ServicesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>[]
          }
          create: {
            args: Prisma.ServicesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>
          }
          createMany: {
            args: Prisma.ServicesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServicesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>[]
          }
          delete: {
            args: Prisma.ServicesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>
          }
          update: {
            args: Prisma.ServicesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>
          }
          deleteMany: {
            args: Prisma.ServicesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServicesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServicesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>[]
          }
          upsert: {
            args: Prisma.ServicesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>
          }
          aggregate: {
            args: Prisma.ServicesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServices>
          }
          groupBy: {
            args: Prisma.ServicesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServicesCountArgs<ExtArgs>
            result: $Utils.Optional<ServicesCountAggregateOutputType> | number
          }
        }
      }
      Contain: {
        payload: Prisma.$ContainPayload<ExtArgs>
        fields: Prisma.ContainFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContainFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContainFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainPayload>
          }
          findFirst: {
            args: Prisma.ContainFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContainFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainPayload>
          }
          findMany: {
            args: Prisma.ContainFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainPayload>[]
          }
          create: {
            args: Prisma.ContainCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainPayload>
          }
          createMany: {
            args: Prisma.ContainCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContainCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainPayload>[]
          }
          delete: {
            args: Prisma.ContainDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainPayload>
          }
          update: {
            args: Prisma.ContainUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainPayload>
          }
          deleteMany: {
            args: Prisma.ContainDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContainUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContainUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainPayload>[]
          }
          upsert: {
            args: Prisma.ContainUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainPayload>
          }
          aggregate: {
            args: Prisma.ContainAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContain>
          }
          groupBy: {
            args: Prisma.ContainGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContainGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContainCountArgs<ExtArgs>
            result: $Utils.Optional<ContainCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    users?: UsersOmit
    services?: ServicesOmit
    contain?: ContainOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    first_name: string | null
    middle_name: string | null
    last_name: string | null
    gender: string | null
    mobile_no: string | null
    email: string | null
    password: string | null
    reference_token: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    first_name: string | null
    middle_name: string | null
    last_name: string | null
    gender: string | null
    mobile_no: string | null
    email: string | null
    password: string | null
    reference_token: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    first_name: number
    middle_name: number
    last_name: number
    gender: number
    mobile_no: number
    email: number
    password: number
    reference_token: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    first_name?: true
    middle_name?: true
    last_name?: true
    gender?: true
    mobile_no?: true
    email?: true
    password?: true
    reference_token?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    first_name?: true
    middle_name?: true
    last_name?: true
    gender?: true
    mobile_no?: true
    email?: true
    password?: true
    reference_token?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    first_name?: true
    middle_name?: true
    last_name?: true
    gender?: true
    mobile_no?: true
    email?: true
    password?: true
    reference_token?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    first_name: string
    middle_name: string | null
    last_name: string
    gender: string
    mobile_no: string
    email: string
    password: string
    reference_token: string
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    middle_name?: boolean
    last_name?: boolean
    gender?: boolean
    mobile_no?: boolean
    email?: boolean
    password?: boolean
    reference_token?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    middle_name?: boolean
    last_name?: boolean
    gender?: boolean
    mobile_no?: boolean
    email?: boolean
    password?: boolean
    reference_token?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    middle_name?: boolean
    last_name?: boolean
    gender?: boolean
    mobile_no?: boolean
    email?: boolean
    password?: boolean
    reference_token?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    first_name?: boolean
    middle_name?: boolean
    last_name?: boolean
    gender?: boolean
    mobile_no?: boolean
    email?: boolean
    password?: boolean
    reference_token?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "first_name" | "middle_name" | "last_name" | "gender" | "mobile_no" | "email" | "password" | "reference_token", ExtArgs["result"]["users"]>

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      first_name: string
      middle_name: string | null
      last_name: string
      gender: string
      mobile_no: string
      email: string
      password: string
      reference_token: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly first_name: FieldRef<"Users", 'String'>
    readonly middle_name: FieldRef<"Users", 'String'>
    readonly last_name: FieldRef<"Users", 'String'>
    readonly gender: FieldRef<"Users", 'String'>
    readonly mobile_no: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly reference_token: FieldRef<"Users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
  }


  /**
   * Model Services
   */

  export type AggregateServices = {
    _count: ServicesCountAggregateOutputType | null
    _avg: ServicesAvgAggregateOutputType | null
    _sum: ServicesSumAggregateOutputType | null
    _min: ServicesMinAggregateOutputType | null
    _max: ServicesMaxAggregateOutputType | null
  }

  export type ServicesAvgAggregateOutputType = {
    id: number | null
    inPrice: number | null
    price: number | null
    inStock: number | null
  }

  export type ServicesSumAggregateOutputType = {
    id: number | null
    inPrice: number | null
    price: number | null
    inStock: number | null
  }

  export type ServicesMinAggregateOutputType = {
    id: number | null
    service: string | null
    inPrice: number | null
    price: number | null
    unit: string | null
    inStock: number | null
    description: string | null
  }

  export type ServicesMaxAggregateOutputType = {
    id: number | null
    service: string | null
    inPrice: number | null
    price: number | null
    unit: string | null
    inStock: number | null
    description: string | null
  }

  export type ServicesCountAggregateOutputType = {
    id: number
    service: number
    inPrice: number
    price: number
    unit: number
    inStock: number
    description: number
    _all: number
  }


  export type ServicesAvgAggregateInputType = {
    id?: true
    inPrice?: true
    price?: true
    inStock?: true
  }

  export type ServicesSumAggregateInputType = {
    id?: true
    inPrice?: true
    price?: true
    inStock?: true
  }

  export type ServicesMinAggregateInputType = {
    id?: true
    service?: true
    inPrice?: true
    price?: true
    unit?: true
    inStock?: true
    description?: true
  }

  export type ServicesMaxAggregateInputType = {
    id?: true
    service?: true
    inPrice?: true
    price?: true
    unit?: true
    inStock?: true
    description?: true
  }

  export type ServicesCountAggregateInputType = {
    id?: true
    service?: true
    inPrice?: true
    price?: true
    unit?: true
    inStock?: true
    description?: true
    _all?: true
  }

  export type ServicesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to aggregate.
     */
    where?: ServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServicesOrderByWithRelationInput | ServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServicesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServicesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServicesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicesMaxAggregateInputType
  }

  export type GetServicesAggregateType<T extends ServicesAggregateArgs> = {
        [P in keyof T & keyof AggregateServices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServices[P]>
      : GetScalarType<T[P], AggregateServices[P]>
  }




  export type ServicesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicesWhereInput
    orderBy?: ServicesOrderByWithAggregationInput | ServicesOrderByWithAggregationInput[]
    by: ServicesScalarFieldEnum[] | ServicesScalarFieldEnum
    having?: ServicesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicesCountAggregateInputType | true
    _avg?: ServicesAvgAggregateInputType
    _sum?: ServicesSumAggregateInputType
    _min?: ServicesMinAggregateInputType
    _max?: ServicesMaxAggregateInputType
  }

  export type ServicesGroupByOutputType = {
    id: number
    service: string
    inPrice: number
    price: number
    unit: string
    inStock: number
    description: string
    _count: ServicesCountAggregateOutputType | null
    _avg: ServicesAvgAggregateOutputType | null
    _sum: ServicesSumAggregateOutputType | null
    _min: ServicesMinAggregateOutputType | null
    _max: ServicesMaxAggregateOutputType | null
  }

  type GetServicesGroupByPayload<T extends ServicesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicesGroupByOutputType[P]>
            : GetScalarType<T[P], ServicesGroupByOutputType[P]>
        }
      >
    >


  export type ServicesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service?: boolean
    inPrice?: boolean
    price?: boolean
    unit?: boolean
    inStock?: boolean
    description?: boolean
  }, ExtArgs["result"]["services"]>

  export type ServicesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service?: boolean
    inPrice?: boolean
    price?: boolean
    unit?: boolean
    inStock?: boolean
    description?: boolean
  }, ExtArgs["result"]["services"]>

  export type ServicesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service?: boolean
    inPrice?: boolean
    price?: boolean
    unit?: boolean
    inStock?: boolean
    description?: boolean
  }, ExtArgs["result"]["services"]>

  export type ServicesSelectScalar = {
    id?: boolean
    service?: boolean
    inPrice?: boolean
    price?: boolean
    unit?: boolean
    inStock?: boolean
    description?: boolean
  }

  export type ServicesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "service" | "inPrice" | "price" | "unit" | "inStock" | "description", ExtArgs["result"]["services"]>

  export type $ServicesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Services"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      service: string
      inPrice: number
      price: number
      unit: string
      inStock: number
      description: string
    }, ExtArgs["result"]["services"]>
    composites: {}
  }

  type ServicesGetPayload<S extends boolean | null | undefined | ServicesDefaultArgs> = $Result.GetResult<Prisma.$ServicesPayload, S>

  type ServicesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServicesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServicesCountAggregateInputType | true
    }

  export interface ServicesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Services'], meta: { name: 'Services' } }
    /**
     * Find zero or one Services that matches the filter.
     * @param {ServicesFindUniqueArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServicesFindUniqueArgs>(args: SelectSubset<T, ServicesFindUniqueArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Services that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServicesFindUniqueOrThrowArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServicesFindUniqueOrThrowArgs>(args: SelectSubset<T, ServicesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesFindFirstArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServicesFindFirstArgs>(args?: SelectSubset<T, ServicesFindFirstArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Services that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesFindFirstOrThrowArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServicesFindFirstOrThrowArgs>(args?: SelectSubset<T, ServicesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.services.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.services.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const servicesWithIdOnly = await prisma.services.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServicesFindManyArgs>(args?: SelectSubset<T, ServicesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Services.
     * @param {ServicesCreateArgs} args - Arguments to create a Services.
     * @example
     * // Create one Services
     * const Services = await prisma.services.create({
     *   data: {
     *     // ... data to create a Services
     *   }
     * })
     * 
     */
    create<T extends ServicesCreateArgs>(args: SelectSubset<T, ServicesCreateArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServicesCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const services = await prisma.services.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServicesCreateManyArgs>(args?: SelectSubset<T, ServicesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServicesCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const services = await prisma.services.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const servicesWithIdOnly = await prisma.services.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServicesCreateManyAndReturnArgs>(args?: SelectSubset<T, ServicesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Services.
     * @param {ServicesDeleteArgs} args - Arguments to delete one Services.
     * @example
     * // Delete one Services
     * const Services = await prisma.services.delete({
     *   where: {
     *     // ... filter to delete one Services
     *   }
     * })
     * 
     */
    delete<T extends ServicesDeleteArgs>(args: SelectSubset<T, ServicesDeleteArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Services.
     * @param {ServicesUpdateArgs} args - Arguments to update one Services.
     * @example
     * // Update one Services
     * const services = await prisma.services.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServicesUpdateArgs>(args: SelectSubset<T, ServicesUpdateArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServicesDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.services.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServicesDeleteManyArgs>(args?: SelectSubset<T, ServicesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const services = await prisma.services.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServicesUpdateManyArgs>(args: SelectSubset<T, ServicesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {ServicesUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const services = await prisma.services.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const servicesWithIdOnly = await prisma.services.updateManyAndReturn({
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
    updateManyAndReturn<T extends ServicesUpdateManyAndReturnArgs>(args: SelectSubset<T, ServicesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Services.
     * @param {ServicesUpsertArgs} args - Arguments to update or create a Services.
     * @example
     * // Update or create a Services
     * const services = await prisma.services.upsert({
     *   create: {
     *     // ... data to create a Services
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Services we want to update
     *   }
     * })
     */
    upsert<T extends ServicesUpsertArgs>(args: SelectSubset<T, ServicesUpsertArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.services.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServicesCountArgs>(
      args?: Subset<T, ServicesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServicesAggregateArgs>(args: Subset<T, ServicesAggregateArgs>): Prisma.PrismaPromise<GetServicesAggregateType<T>>

    /**
     * Group by Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesGroupByArgs} args - Group by arguments.
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
      T extends ServicesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServicesGroupByArgs['orderBy'] }
        : { orderBy?: ServicesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Services model
   */
  readonly fields: ServicesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Services.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServicesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Services model
   */
  interface ServicesFieldRefs {
    readonly id: FieldRef<"Services", 'Int'>
    readonly service: FieldRef<"Services", 'String'>
    readonly inPrice: FieldRef<"Services", 'Int'>
    readonly price: FieldRef<"Services", 'Int'>
    readonly unit: FieldRef<"Services", 'String'>
    readonly inStock: FieldRef<"Services", 'Int'>
    readonly description: FieldRef<"Services", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Services findUnique
   */
  export type ServicesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where: ServicesWhereUniqueInput
  }

  /**
   * Services findUniqueOrThrow
   */
  export type ServicesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where: ServicesWhereUniqueInput
  }

  /**
   * Services findFirst
   */
  export type ServicesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServicesOrderByWithRelationInput | ServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServicesScalarFieldEnum | ServicesScalarFieldEnum[]
  }

  /**
   * Services findFirstOrThrow
   */
  export type ServicesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServicesOrderByWithRelationInput | ServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServicesScalarFieldEnum | ServicesScalarFieldEnum[]
  }

  /**
   * Services findMany
   */
  export type ServicesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServicesOrderByWithRelationInput | ServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServicesScalarFieldEnum | ServicesScalarFieldEnum[]
  }

  /**
   * Services create
   */
  export type ServicesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * The data needed to create a Services.
     */
    data: XOR<ServicesCreateInput, ServicesUncheckedCreateInput>
  }

  /**
   * Services createMany
   */
  export type ServicesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServicesCreateManyInput | ServicesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Services createManyAndReturn
   */
  export type ServicesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServicesCreateManyInput | ServicesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Services update
   */
  export type ServicesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * The data needed to update a Services.
     */
    data: XOR<ServicesUpdateInput, ServicesUncheckedUpdateInput>
    /**
     * Choose, which Services to update.
     */
    where: ServicesWhereUniqueInput
  }

  /**
   * Services updateMany
   */
  export type ServicesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServicesUpdateManyMutationInput, ServicesUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServicesWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Services updateManyAndReturn
   */
  export type ServicesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * The data used to update Services.
     */
    data: XOR<ServicesUpdateManyMutationInput, ServicesUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServicesWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Services upsert
   */
  export type ServicesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * The filter to search for the Services to update in case it exists.
     */
    where: ServicesWhereUniqueInput
    /**
     * In case the Services found by the `where` argument doesn't exist, create a new Services with this data.
     */
    create: XOR<ServicesCreateInput, ServicesUncheckedCreateInput>
    /**
     * In case the Services was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServicesUpdateInput, ServicesUncheckedUpdateInput>
  }

  /**
   * Services delete
   */
  export type ServicesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Filter which Services to delete.
     */
    where: ServicesWhereUniqueInput
  }

  /**
   * Services deleteMany
   */
  export type ServicesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServicesWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Services without action
   */
  export type ServicesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
  }


  /**
   * Model Contain
   */

  export type AggregateContain = {
    _count: ContainCountAggregateOutputType | null
    _avg: ContainAvgAggregateOutputType | null
    _sum: ContainSumAggregateOutputType | null
    _min: ContainMinAggregateOutputType | null
    _max: ContainMaxAggregateOutputType | null
  }

  export type ContainAvgAggregateOutputType = {
    id: number | null
  }

  export type ContainSumAggregateOutputType = {
    id: number | null
  }

  export type ContainMinAggregateOutputType = {
    id: number | null
    languages: string | null
    loginPageContain: string | null
    terms: string | null
  }

  export type ContainMaxAggregateOutputType = {
    id: number | null
    languages: string | null
    loginPageContain: string | null
    terms: string | null
  }

  export type ContainCountAggregateOutputType = {
    id: number
    languages: number
    loginPageContain: number
    terms: number
    _all: number
  }


  export type ContainAvgAggregateInputType = {
    id?: true
  }

  export type ContainSumAggregateInputType = {
    id?: true
  }

  export type ContainMinAggregateInputType = {
    id?: true
    languages?: true
    loginPageContain?: true
    terms?: true
  }

  export type ContainMaxAggregateInputType = {
    id?: true
    languages?: true
    loginPageContain?: true
    terms?: true
  }

  export type ContainCountAggregateInputType = {
    id?: true
    languages?: true
    loginPageContain?: true
    terms?: true
    _all?: true
  }

  export type ContainAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contain to aggregate.
     */
    where?: ContainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contains to fetch.
     */
    orderBy?: ContainOrderByWithRelationInput | ContainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contains
    **/
    _count?: true | ContainCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContainAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContainSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContainMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContainMaxAggregateInputType
  }

  export type GetContainAggregateType<T extends ContainAggregateArgs> = {
        [P in keyof T & keyof AggregateContain]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContain[P]>
      : GetScalarType<T[P], AggregateContain[P]>
  }




  export type ContainGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContainWhereInput
    orderBy?: ContainOrderByWithAggregationInput | ContainOrderByWithAggregationInput[]
    by: ContainScalarFieldEnum[] | ContainScalarFieldEnum
    having?: ContainScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContainCountAggregateInputType | true
    _avg?: ContainAvgAggregateInputType
    _sum?: ContainSumAggregateInputType
    _min?: ContainMinAggregateInputType
    _max?: ContainMaxAggregateInputType
  }

  export type ContainGroupByOutputType = {
    id: number
    languages: string
    loginPageContain: string
    terms: string
    _count: ContainCountAggregateOutputType | null
    _avg: ContainAvgAggregateOutputType | null
    _sum: ContainSumAggregateOutputType | null
    _min: ContainMinAggregateOutputType | null
    _max: ContainMaxAggregateOutputType | null
  }

  type GetContainGroupByPayload<T extends ContainGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContainGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContainGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContainGroupByOutputType[P]>
            : GetScalarType<T[P], ContainGroupByOutputType[P]>
        }
      >
    >


  export type ContainSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    languages?: boolean
    loginPageContain?: boolean
    terms?: boolean
  }, ExtArgs["result"]["contain"]>

  export type ContainSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    languages?: boolean
    loginPageContain?: boolean
    terms?: boolean
  }, ExtArgs["result"]["contain"]>

  export type ContainSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    languages?: boolean
    loginPageContain?: boolean
    terms?: boolean
  }, ExtArgs["result"]["contain"]>

  export type ContainSelectScalar = {
    id?: boolean
    languages?: boolean
    loginPageContain?: boolean
    terms?: boolean
  }

  export type ContainOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "languages" | "loginPageContain" | "terms", ExtArgs["result"]["contain"]>

  export type $ContainPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contain"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      languages: string
      loginPageContain: string
      terms: string
    }, ExtArgs["result"]["contain"]>
    composites: {}
  }

  type ContainGetPayload<S extends boolean | null | undefined | ContainDefaultArgs> = $Result.GetResult<Prisma.$ContainPayload, S>

  type ContainCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContainFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContainCountAggregateInputType | true
    }

  export interface ContainDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contain'], meta: { name: 'Contain' } }
    /**
     * Find zero or one Contain that matches the filter.
     * @param {ContainFindUniqueArgs} args - Arguments to find a Contain
     * @example
     * // Get one Contain
     * const contain = await prisma.contain.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContainFindUniqueArgs>(args: SelectSubset<T, ContainFindUniqueArgs<ExtArgs>>): Prisma__ContainClient<$Result.GetResult<Prisma.$ContainPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contain that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContainFindUniqueOrThrowArgs} args - Arguments to find a Contain
     * @example
     * // Get one Contain
     * const contain = await prisma.contain.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContainFindUniqueOrThrowArgs>(args: SelectSubset<T, ContainFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContainClient<$Result.GetResult<Prisma.$ContainPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contain that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainFindFirstArgs} args - Arguments to find a Contain
     * @example
     * // Get one Contain
     * const contain = await prisma.contain.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContainFindFirstArgs>(args?: SelectSubset<T, ContainFindFirstArgs<ExtArgs>>): Prisma__ContainClient<$Result.GetResult<Prisma.$ContainPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contain that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainFindFirstOrThrowArgs} args - Arguments to find a Contain
     * @example
     * // Get one Contain
     * const contain = await prisma.contain.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContainFindFirstOrThrowArgs>(args?: SelectSubset<T, ContainFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContainClient<$Result.GetResult<Prisma.$ContainPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contains that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contains
     * const contains = await prisma.contain.findMany()
     * 
     * // Get first 10 Contains
     * const contains = await prisma.contain.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const containWithIdOnly = await prisma.contain.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContainFindManyArgs>(args?: SelectSubset<T, ContainFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContainPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contain.
     * @param {ContainCreateArgs} args - Arguments to create a Contain.
     * @example
     * // Create one Contain
     * const Contain = await prisma.contain.create({
     *   data: {
     *     // ... data to create a Contain
     *   }
     * })
     * 
     */
    create<T extends ContainCreateArgs>(args: SelectSubset<T, ContainCreateArgs<ExtArgs>>): Prisma__ContainClient<$Result.GetResult<Prisma.$ContainPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contains.
     * @param {ContainCreateManyArgs} args - Arguments to create many Contains.
     * @example
     * // Create many Contains
     * const contain = await prisma.contain.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContainCreateManyArgs>(args?: SelectSubset<T, ContainCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contains and returns the data saved in the database.
     * @param {ContainCreateManyAndReturnArgs} args - Arguments to create many Contains.
     * @example
     * // Create many Contains
     * const contain = await prisma.contain.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contains and only return the `id`
     * const containWithIdOnly = await prisma.contain.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContainCreateManyAndReturnArgs>(args?: SelectSubset<T, ContainCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContainPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contain.
     * @param {ContainDeleteArgs} args - Arguments to delete one Contain.
     * @example
     * // Delete one Contain
     * const Contain = await prisma.contain.delete({
     *   where: {
     *     // ... filter to delete one Contain
     *   }
     * })
     * 
     */
    delete<T extends ContainDeleteArgs>(args: SelectSubset<T, ContainDeleteArgs<ExtArgs>>): Prisma__ContainClient<$Result.GetResult<Prisma.$ContainPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contain.
     * @param {ContainUpdateArgs} args - Arguments to update one Contain.
     * @example
     * // Update one Contain
     * const contain = await prisma.contain.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContainUpdateArgs>(args: SelectSubset<T, ContainUpdateArgs<ExtArgs>>): Prisma__ContainClient<$Result.GetResult<Prisma.$ContainPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contains.
     * @param {ContainDeleteManyArgs} args - Arguments to filter Contains to delete.
     * @example
     * // Delete a few Contains
     * const { count } = await prisma.contain.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContainDeleteManyArgs>(args?: SelectSubset<T, ContainDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contains
     * const contain = await prisma.contain.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContainUpdateManyArgs>(args: SelectSubset<T, ContainUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contains and returns the data updated in the database.
     * @param {ContainUpdateManyAndReturnArgs} args - Arguments to update many Contains.
     * @example
     * // Update many Contains
     * const contain = await prisma.contain.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contains and only return the `id`
     * const containWithIdOnly = await prisma.contain.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContainUpdateManyAndReturnArgs>(args: SelectSubset<T, ContainUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContainPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contain.
     * @param {ContainUpsertArgs} args - Arguments to update or create a Contain.
     * @example
     * // Update or create a Contain
     * const contain = await prisma.contain.upsert({
     *   create: {
     *     // ... data to create a Contain
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contain we want to update
     *   }
     * })
     */
    upsert<T extends ContainUpsertArgs>(args: SelectSubset<T, ContainUpsertArgs<ExtArgs>>): Prisma__ContainClient<$Result.GetResult<Prisma.$ContainPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainCountArgs} args - Arguments to filter Contains to count.
     * @example
     * // Count the number of Contains
     * const count = await prisma.contain.count({
     *   where: {
     *     // ... the filter for the Contains we want to count
     *   }
     * })
    **/
    count<T extends ContainCountArgs>(
      args?: Subset<T, ContainCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContainCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContainAggregateArgs>(args: Subset<T, ContainAggregateArgs>): Prisma.PrismaPromise<GetContainAggregateType<T>>

    /**
     * Group by Contain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainGroupByArgs} args - Group by arguments.
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
      T extends ContainGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContainGroupByArgs['orderBy'] }
        : { orderBy?: ContainGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContainGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContainGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contain model
   */
  readonly fields: ContainFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contain.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContainClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Contain model
   */
  interface ContainFieldRefs {
    readonly id: FieldRef<"Contain", 'Int'>
    readonly languages: FieldRef<"Contain", 'String'>
    readonly loginPageContain: FieldRef<"Contain", 'String'>
    readonly terms: FieldRef<"Contain", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Contain findUnique
   */
  export type ContainFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contain
     */
    select?: ContainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contain
     */
    omit?: ContainOmit<ExtArgs> | null
    /**
     * Filter, which Contain to fetch.
     */
    where: ContainWhereUniqueInput
  }

  /**
   * Contain findUniqueOrThrow
   */
  export type ContainFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contain
     */
    select?: ContainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contain
     */
    omit?: ContainOmit<ExtArgs> | null
    /**
     * Filter, which Contain to fetch.
     */
    where: ContainWhereUniqueInput
  }

  /**
   * Contain findFirst
   */
  export type ContainFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contain
     */
    select?: ContainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contain
     */
    omit?: ContainOmit<ExtArgs> | null
    /**
     * Filter, which Contain to fetch.
     */
    where?: ContainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contains to fetch.
     */
    orderBy?: ContainOrderByWithRelationInput | ContainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contains.
     */
    cursor?: ContainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contains.
     */
    distinct?: ContainScalarFieldEnum | ContainScalarFieldEnum[]
  }

  /**
   * Contain findFirstOrThrow
   */
  export type ContainFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contain
     */
    select?: ContainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contain
     */
    omit?: ContainOmit<ExtArgs> | null
    /**
     * Filter, which Contain to fetch.
     */
    where?: ContainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contains to fetch.
     */
    orderBy?: ContainOrderByWithRelationInput | ContainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contains.
     */
    cursor?: ContainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contains.
     */
    distinct?: ContainScalarFieldEnum | ContainScalarFieldEnum[]
  }

  /**
   * Contain findMany
   */
  export type ContainFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contain
     */
    select?: ContainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contain
     */
    omit?: ContainOmit<ExtArgs> | null
    /**
     * Filter, which Contains to fetch.
     */
    where?: ContainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contains to fetch.
     */
    orderBy?: ContainOrderByWithRelationInput | ContainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contains.
     */
    cursor?: ContainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contains.
     */
    skip?: number
    distinct?: ContainScalarFieldEnum | ContainScalarFieldEnum[]
  }

  /**
   * Contain create
   */
  export type ContainCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contain
     */
    select?: ContainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contain
     */
    omit?: ContainOmit<ExtArgs> | null
    /**
     * The data needed to create a Contain.
     */
    data: XOR<ContainCreateInput, ContainUncheckedCreateInput>
  }

  /**
   * Contain createMany
   */
  export type ContainCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contains.
     */
    data: ContainCreateManyInput | ContainCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contain createManyAndReturn
   */
  export type ContainCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contain
     */
    select?: ContainSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contain
     */
    omit?: ContainOmit<ExtArgs> | null
    /**
     * The data used to create many Contains.
     */
    data: ContainCreateManyInput | ContainCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contain update
   */
  export type ContainUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contain
     */
    select?: ContainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contain
     */
    omit?: ContainOmit<ExtArgs> | null
    /**
     * The data needed to update a Contain.
     */
    data: XOR<ContainUpdateInput, ContainUncheckedUpdateInput>
    /**
     * Choose, which Contain to update.
     */
    where: ContainWhereUniqueInput
  }

  /**
   * Contain updateMany
   */
  export type ContainUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contains.
     */
    data: XOR<ContainUpdateManyMutationInput, ContainUncheckedUpdateManyInput>
    /**
     * Filter which Contains to update
     */
    where?: ContainWhereInput
    /**
     * Limit how many Contains to update.
     */
    limit?: number
  }

  /**
   * Contain updateManyAndReturn
   */
  export type ContainUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contain
     */
    select?: ContainSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contain
     */
    omit?: ContainOmit<ExtArgs> | null
    /**
     * The data used to update Contains.
     */
    data: XOR<ContainUpdateManyMutationInput, ContainUncheckedUpdateManyInput>
    /**
     * Filter which Contains to update
     */
    where?: ContainWhereInput
    /**
     * Limit how many Contains to update.
     */
    limit?: number
  }

  /**
   * Contain upsert
   */
  export type ContainUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contain
     */
    select?: ContainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contain
     */
    omit?: ContainOmit<ExtArgs> | null
    /**
     * The filter to search for the Contain to update in case it exists.
     */
    where: ContainWhereUniqueInput
    /**
     * In case the Contain found by the `where` argument doesn't exist, create a new Contain with this data.
     */
    create: XOR<ContainCreateInput, ContainUncheckedCreateInput>
    /**
     * In case the Contain was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContainUpdateInput, ContainUncheckedUpdateInput>
  }

  /**
   * Contain delete
   */
  export type ContainDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contain
     */
    select?: ContainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contain
     */
    omit?: ContainOmit<ExtArgs> | null
    /**
     * Filter which Contain to delete.
     */
    where: ContainWhereUniqueInput
  }

  /**
   * Contain deleteMany
   */
  export type ContainDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contains to delete
     */
    where?: ContainWhereInput
    /**
     * Limit how many Contains to delete.
     */
    limit?: number
  }

  /**
   * Contain without action
   */
  export type ContainDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contain
     */
    select?: ContainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contain
     */
    omit?: ContainOmit<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    middle_name: 'middle_name',
    last_name: 'last_name',
    gender: 'gender',
    mobile_no: 'mobile_no',
    email: 'email',
    password: 'password',
    reference_token: 'reference_token'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const ServicesScalarFieldEnum: {
    id: 'id',
    service: 'service',
    inPrice: 'inPrice',
    price: 'price',
    unit: 'unit',
    inStock: 'inStock',
    description: 'description'
  };

  export type ServicesScalarFieldEnum = (typeof ServicesScalarFieldEnum)[keyof typeof ServicesScalarFieldEnum]


  export const ContainScalarFieldEnum: {
    id: 'id',
    languages: 'languages',
    loginPageContain: 'loginPageContain',
    terms: 'terms'
  };

  export type ContainScalarFieldEnum = (typeof ContainScalarFieldEnum)[keyof typeof ContainScalarFieldEnum]


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


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    first_name?: StringFilter<"Users"> | string
    middle_name?: StringNullableFilter<"Users"> | string | null
    last_name?: StringFilter<"Users"> | string
    gender?: StringFilter<"Users"> | string
    mobile_no?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    reference_token?: StringFilter<"Users"> | string
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    middle_name?: SortOrderInput | SortOrder
    last_name?: SortOrder
    gender?: SortOrder
    mobile_no?: SortOrder
    email?: SortOrder
    password?: SortOrder
    reference_token?: SortOrder
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    mobile_no?: string
    email?: string
    reference_token?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    first_name?: StringFilter<"Users"> | string
    middle_name?: StringNullableFilter<"Users"> | string | null
    last_name?: StringFilter<"Users"> | string
    gender?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
  }, "id" | "id" | "mobile_no" | "email" | "reference_token">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    middle_name?: SortOrderInput | SortOrder
    last_name?: SortOrder
    gender?: SortOrder
    mobile_no?: SortOrder
    email?: SortOrder
    password?: SortOrder
    reference_token?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    first_name?: StringWithAggregatesFilter<"Users"> | string
    middle_name?: StringNullableWithAggregatesFilter<"Users"> | string | null
    last_name?: StringWithAggregatesFilter<"Users"> | string
    gender?: StringWithAggregatesFilter<"Users"> | string
    mobile_no?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    reference_token?: StringWithAggregatesFilter<"Users"> | string
  }

  export type ServicesWhereInput = {
    AND?: ServicesWhereInput | ServicesWhereInput[]
    OR?: ServicesWhereInput[]
    NOT?: ServicesWhereInput | ServicesWhereInput[]
    id?: IntFilter<"Services"> | number
    service?: StringFilter<"Services"> | string
    inPrice?: IntFilter<"Services"> | number
    price?: IntFilter<"Services"> | number
    unit?: StringFilter<"Services"> | string
    inStock?: IntFilter<"Services"> | number
    description?: StringFilter<"Services"> | string
  }

  export type ServicesOrderByWithRelationInput = {
    id?: SortOrder
    service?: SortOrder
    inPrice?: SortOrder
    price?: SortOrder
    unit?: SortOrder
    inStock?: SortOrder
    description?: SortOrder
  }

  export type ServicesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ServicesWhereInput | ServicesWhereInput[]
    OR?: ServicesWhereInput[]
    NOT?: ServicesWhereInput | ServicesWhereInput[]
    service?: StringFilter<"Services"> | string
    inPrice?: IntFilter<"Services"> | number
    price?: IntFilter<"Services"> | number
    unit?: StringFilter<"Services"> | string
    inStock?: IntFilter<"Services"> | number
    description?: StringFilter<"Services"> | string
  }, "id" | "id">

  export type ServicesOrderByWithAggregationInput = {
    id?: SortOrder
    service?: SortOrder
    inPrice?: SortOrder
    price?: SortOrder
    unit?: SortOrder
    inStock?: SortOrder
    description?: SortOrder
    _count?: ServicesCountOrderByAggregateInput
    _avg?: ServicesAvgOrderByAggregateInput
    _max?: ServicesMaxOrderByAggregateInput
    _min?: ServicesMinOrderByAggregateInput
    _sum?: ServicesSumOrderByAggregateInput
  }

  export type ServicesScalarWhereWithAggregatesInput = {
    AND?: ServicesScalarWhereWithAggregatesInput | ServicesScalarWhereWithAggregatesInput[]
    OR?: ServicesScalarWhereWithAggregatesInput[]
    NOT?: ServicesScalarWhereWithAggregatesInput | ServicesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Services"> | number
    service?: StringWithAggregatesFilter<"Services"> | string
    inPrice?: IntWithAggregatesFilter<"Services"> | number
    price?: IntWithAggregatesFilter<"Services"> | number
    unit?: StringWithAggregatesFilter<"Services"> | string
    inStock?: IntWithAggregatesFilter<"Services"> | number
    description?: StringWithAggregatesFilter<"Services"> | string
  }

  export type ContainWhereInput = {
    AND?: ContainWhereInput | ContainWhereInput[]
    OR?: ContainWhereInput[]
    NOT?: ContainWhereInput | ContainWhereInput[]
    id?: IntFilter<"Contain"> | number
    languages?: StringFilter<"Contain"> | string
    loginPageContain?: StringFilter<"Contain"> | string
    terms?: StringFilter<"Contain"> | string
  }

  export type ContainOrderByWithRelationInput = {
    id?: SortOrder
    languages?: SortOrder
    loginPageContain?: SortOrder
    terms?: SortOrder
  }

  export type ContainWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContainWhereInput | ContainWhereInput[]
    OR?: ContainWhereInput[]
    NOT?: ContainWhereInput | ContainWhereInput[]
    languages?: StringFilter<"Contain"> | string
    loginPageContain?: StringFilter<"Contain"> | string
    terms?: StringFilter<"Contain"> | string
  }, "id" | "id">

  export type ContainOrderByWithAggregationInput = {
    id?: SortOrder
    languages?: SortOrder
    loginPageContain?: SortOrder
    terms?: SortOrder
    _count?: ContainCountOrderByAggregateInput
    _avg?: ContainAvgOrderByAggregateInput
    _max?: ContainMaxOrderByAggregateInput
    _min?: ContainMinOrderByAggregateInput
    _sum?: ContainSumOrderByAggregateInput
  }

  export type ContainScalarWhereWithAggregatesInput = {
    AND?: ContainScalarWhereWithAggregatesInput | ContainScalarWhereWithAggregatesInput[]
    OR?: ContainScalarWhereWithAggregatesInput[]
    NOT?: ContainScalarWhereWithAggregatesInput | ContainScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Contain"> | number
    languages?: StringWithAggregatesFilter<"Contain"> | string
    loginPageContain?: StringWithAggregatesFilter<"Contain"> | string
    terms?: StringWithAggregatesFilter<"Contain"> | string
  }

  export type UsersCreateInput = {
    first_name: string
    middle_name?: string | null
    last_name: string
    gender: string
    mobile_no: string
    email: string
    password: string
    reference_token: string
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    first_name: string
    middle_name?: string | null
    last_name: string
    gender: string
    mobile_no: string
    email: string
    password: string
    reference_token: string
  }

  export type UsersUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    mobile_no?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reference_token?: StringFieldUpdateOperationsInput | string
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    mobile_no?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reference_token?: StringFieldUpdateOperationsInput | string
  }

  export type UsersCreateManyInput = {
    id?: number
    first_name: string
    middle_name?: string | null
    last_name: string
    gender: string
    mobile_no: string
    email: string
    password: string
    reference_token: string
  }

  export type UsersUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    mobile_no?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reference_token?: StringFieldUpdateOperationsInput | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    mobile_no?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reference_token?: StringFieldUpdateOperationsInput | string
  }

  export type ServicesCreateInput = {
    service: string
    inPrice: number
    price: number
    unit: string
    inStock: number
    description: string
  }

  export type ServicesUncheckedCreateInput = {
    id?: number
    service: string
    inPrice: number
    price: number
    unit: string
    inStock: number
    description: string
  }

  export type ServicesUpdateInput = {
    service?: StringFieldUpdateOperationsInput | string
    inPrice?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    inStock?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ServicesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    service?: StringFieldUpdateOperationsInput | string
    inPrice?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    inStock?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ServicesCreateManyInput = {
    id?: number
    service: string
    inPrice: number
    price: number
    unit: string
    inStock: number
    description: string
  }

  export type ServicesUpdateManyMutationInput = {
    service?: StringFieldUpdateOperationsInput | string
    inPrice?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    inStock?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ServicesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    service?: StringFieldUpdateOperationsInput | string
    inPrice?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    inStock?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ContainCreateInput = {
    languages: string
    loginPageContain: string
    terms: string
  }

  export type ContainUncheckedCreateInput = {
    id?: number
    languages: string
    loginPageContain: string
    terms: string
  }

  export type ContainUpdateInput = {
    languages?: StringFieldUpdateOperationsInput | string
    loginPageContain?: StringFieldUpdateOperationsInput | string
    terms?: StringFieldUpdateOperationsInput | string
  }

  export type ContainUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    languages?: StringFieldUpdateOperationsInput | string
    loginPageContain?: StringFieldUpdateOperationsInput | string
    terms?: StringFieldUpdateOperationsInput | string
  }

  export type ContainCreateManyInput = {
    id?: number
    languages: string
    loginPageContain: string
    terms: string
  }

  export type ContainUpdateManyMutationInput = {
    languages?: StringFieldUpdateOperationsInput | string
    loginPageContain?: StringFieldUpdateOperationsInput | string
    terms?: StringFieldUpdateOperationsInput | string
  }

  export type ContainUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    languages?: StringFieldUpdateOperationsInput | string
    loginPageContain?: StringFieldUpdateOperationsInput | string
    terms?: StringFieldUpdateOperationsInput | string
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    middle_name?: SortOrder
    last_name?: SortOrder
    gender?: SortOrder
    mobile_no?: SortOrder
    email?: SortOrder
    password?: SortOrder
    reference_token?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    middle_name?: SortOrder
    last_name?: SortOrder
    gender?: SortOrder
    mobile_no?: SortOrder
    email?: SortOrder
    password?: SortOrder
    reference_token?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    middle_name?: SortOrder
    last_name?: SortOrder
    gender?: SortOrder
    mobile_no?: SortOrder
    email?: SortOrder
    password?: SortOrder
    reference_token?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type ServicesCountOrderByAggregateInput = {
    id?: SortOrder
    service?: SortOrder
    inPrice?: SortOrder
    price?: SortOrder
    unit?: SortOrder
    inStock?: SortOrder
    description?: SortOrder
  }

  export type ServicesAvgOrderByAggregateInput = {
    id?: SortOrder
    inPrice?: SortOrder
    price?: SortOrder
    inStock?: SortOrder
  }

  export type ServicesMaxOrderByAggregateInput = {
    id?: SortOrder
    service?: SortOrder
    inPrice?: SortOrder
    price?: SortOrder
    unit?: SortOrder
    inStock?: SortOrder
    description?: SortOrder
  }

  export type ServicesMinOrderByAggregateInput = {
    id?: SortOrder
    service?: SortOrder
    inPrice?: SortOrder
    price?: SortOrder
    unit?: SortOrder
    inStock?: SortOrder
    description?: SortOrder
  }

  export type ServicesSumOrderByAggregateInput = {
    id?: SortOrder
    inPrice?: SortOrder
    price?: SortOrder
    inStock?: SortOrder
  }

  export type ContainCountOrderByAggregateInput = {
    id?: SortOrder
    languages?: SortOrder
    loginPageContain?: SortOrder
    terms?: SortOrder
  }

  export type ContainAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContainMaxOrderByAggregateInput = {
    id?: SortOrder
    languages?: SortOrder
    loginPageContain?: SortOrder
    terms?: SortOrder
  }

  export type ContainMinOrderByAggregateInput = {
    id?: SortOrder
    languages?: SortOrder
    loginPageContain?: SortOrder
    terms?: SortOrder
  }

  export type ContainSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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